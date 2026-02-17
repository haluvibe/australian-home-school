"use client";

import { useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

interface PrintButtonProps {
  filename?: string;
}

export default function PrintButton({ filename = "worksheet" }: PrintButtonProps) {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState("");

  async function handleDownload() {
    const worksheetEl = document.querySelector(".worksheet-page") as HTMLElement;
    if (!worksheetEl) return;

    setGenerating(true);

    try {
      // A4 dimensions in mm
      const a4Width = 210;
      const a4Height = 297;
      const marginX = 15;
      const marginY = 12;
      const contentWidth = a4Width - marginX * 2;
      const contentHeight = a4Height - marginY * 2;

      // Fix rendering width to A4 proportions for consistent captures.
      // 794px = 210mm at 96 DPI. With scale: 2, this gives ~192 effective DPI.
      const fixedWidth = 794;
      const originalWidth = worksheetEl.style.width;
      const originalMaxWidth = worksheetEl.style.maxWidth;
      const originalPadding = worksheetEl.style.padding;
      worksheetEl.style.width = `${fixedWidth}px`;
      worksheetEl.style.maxWidth = `${fixedWidth}px`;
      worksheetEl.style.padding = "24px 40px";

      // Wait for reflow
      await new Promise((r) => setTimeout(r, 50));

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

      // Capture header
      const headerEl = worksheetEl.querySelector(".worksheet-page > div:first-child") as HTMLElement;
      const activityBlocks = worksheetEl.querySelectorAll(".activity-block");

      setProgress("Preparing header...");
      const headerCanvas = await html2canvas(headerEl, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: fixedWidth,
      });

      const headerImg = headerCanvas.toDataURL("image/png");
      const headerWidthMm = contentWidth;
      const headerHeightMm = (headerCanvas.height / headerCanvas.width) * headerWidthMm;

      pdf.addImage(headerImg, "PNG", marginX, marginY, headerWidthMm, headerHeightMm);

      let currentY = marginY + headerHeightMm + 4;
      let pageNum = 1;

      // Capture each activity block individually for clean pagination
      for (let i = 0; i < activityBlocks.length; i++) {
        setProgress(`Activity ${i + 1} of ${activityBlocks.length}...`);
        const block = activityBlocks[i] as HTMLElement;

        const blockCanvas = await html2canvas(block, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          width: fixedWidth - 80, // Account for page padding
        });

        const blockImg = blockCanvas.toDataURL("image/png");
        const blockWidthMm = contentWidth;
        const blockHeightMm = (blockCanvas.height / blockCanvas.width) * blockWidthMm;

        // If block doesn't fit on current page, start a new one
        if (currentY + blockHeightMm > a4Height - marginY) {
          // Add page number to current page
          addPageNumber(pdf, pageNum, marginX, a4Width, a4Height);
          pdf.addPage();
          pageNum++;
          currentY = marginY;
        }

        pdf.addImage(blockImg, "PNG", marginX, currentY, blockWidthMm, blockHeightMm);
        currentY += blockHeightMm + 3;

        // Yield to browser
        await new Promise((r) => setTimeout(r, 10));
      }

      // Add page number to final page
      addPageNumber(pdf, pageNum, marginX, a4Width, a4Height);

      // Restore original styles
      worksheetEl.style.width = originalWidth;
      worksheetEl.style.maxWidth = originalMaxWidth;
      worksheetEl.style.padding = originalPadding;

      setProgress("Saving PDF...");
      pdf.save(`${filename}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      window.print();
    } finally {
      setGenerating(false);
      setProgress("");
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={generating}
      className="no-print inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-terracotta-dark hover:shadow-lg hover:shadow-terracotta/20 disabled:opacity-60"
    >
      {generating ? (
        <>
          <svg className="h-[18px] w-[18px] animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="31.4 31.4" strokeLinecap="round" />
          </svg>
          {progress || "Generating PDF..."}
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </>
      )}
    </button>
  );
}

function addPageNumber(pdf: jsPDF, pageNum: number, marginX: number, pageWidth: number, pageHeight: number) {
  pdf.setFontSize(9);
  pdf.setTextColor(160, 160, 160);
  pdf.text(`Page ${pageNum}`, pageWidth / 2, pageHeight - 6, { align: "center" });
  pdf.text("Australian Home Schooling", pageWidth - marginX, pageHeight - 6, { align: "right" });
}
