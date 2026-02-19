import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GamesNavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </>
  );
}
