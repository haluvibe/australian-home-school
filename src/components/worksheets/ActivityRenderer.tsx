import type { ActivityData } from "@/lib/worksheet-types";
import NumberTraceActivity from "./activities/NumberTraceActivity";
import CountObjectsActivity from "./activities/CountObjectsActivity";
import MatchingActivity from "./activities/MatchingActivity";
import CompareGroupsActivity from "./activities/CompareGroupsActivity";
import NumberBondsActivity from "./activities/NumberBondsActivity";
import PatternActivity from "./activities/PatternActivity";
import SortingActivity from "./activities/SortingActivity";
import CircleCorrectActivity from "./activities/CircleCorrectActivity";
import SequenceActivity from "./activities/SequenceActivity";
import ShapeTraceActivity from "./activities/ShapeTraceActivity";
import TallyChartActivity from "./activities/TallyChartActivity";
import TenFrameActivity from "./activities/TenFrameActivity";
import OpenResponseActivity from "./activities/OpenResponseActivity";
import HomeActivityActivity from "./activities/HomeActivityActivity";
import PictureGraphActivity from "./activities/PictureGraphActivity";

const COMPACT_TYPES = new Set([
  "number-trace",
  "count-objects",
  "number-bonds",
  "circle-correct",
  "shape-trace",
]);

function isCompactActivity(activity: ActivityData): boolean {
  if (activity.type === "circle-correct") {
    // Use full width when options contain long text (sentences/phrases)
    const maxLen = Math.max(...activity.questions.flatMap((q) => q.options.map((o) => o.length)));
    return maxLen <= 15;
  }
  return COMPACT_TYPES.has(activity.type);
}

interface Props {
  activity: ActivityData;
  number: number;
}

export default function ActivityRenderer({ activity, number }: Props) {
  const isCompact = isCompactActivity(activity);

  let content: React.ReactNode;
  switch (activity.type) {
    case "number-trace":
      content = <NumberTraceActivity data={activity} number={number} />;
      break;
    case "count-objects":
      content = <CountObjectsActivity data={activity} number={number} />;
      break;
    case "matching":
      content = <MatchingActivity data={activity} number={number} />;
      break;
    case "compare-groups":
      content = <CompareGroupsActivity data={activity} number={number} />;
      break;
    case "number-bonds":
      content = <NumberBondsActivity data={activity} number={number} />;
      break;
    case "pattern":
      content = <PatternActivity data={activity} number={number} />;
      break;
    case "sorting":
      content = <SortingActivity data={activity} number={number} />;
      break;
    case "circle-correct":
      content = <CircleCorrectActivity data={activity} number={number} />;
      break;
    case "sequence":
      content = <SequenceActivity data={activity} number={number} />;
      break;
    case "shape-trace":
      content = <ShapeTraceActivity data={activity} number={number} />;
      break;
    case "tally-chart":
      content = <TallyChartActivity data={activity} number={number} />;
      break;
    case "ten-frame":
      content = <TenFrameActivity data={activity} number={number} />;
      break;
    case "open-response":
      content = <OpenResponseActivity data={activity} number={number} />;
      break;
    case "home-activity":
      content = <HomeActivityActivity data={activity} number={number} />;
      break;
    case "picture-graph":
      content = <PictureGraphActivity data={activity} number={number} />;
      break;
    default:
      return null;
  }

  return (
    <div className={isCompact ? "" : "col-span-2"}>
      {content}
    </div>
  );
}
