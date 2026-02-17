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

interface Props {
  activity: ActivityData;
  number: number;
}

export default function ActivityRenderer({ activity, number }: Props) {
  switch (activity.type) {
    case "number-trace":
      return <NumberTraceActivity data={activity} number={number} />;
    case "count-objects":
      return <CountObjectsActivity data={activity} number={number} />;
    case "matching":
      return <MatchingActivity data={activity} number={number} />;
    case "compare-groups":
      return <CompareGroupsActivity data={activity} number={number} />;
    case "number-bonds":
      return <NumberBondsActivity data={activity} number={number} />;
    case "pattern":
      return <PatternActivity data={activity} number={number} />;
    case "sorting":
      return <SortingActivity data={activity} number={number} />;
    case "circle-correct":
      return <CircleCorrectActivity data={activity} number={number} />;
    case "sequence":
      return <SequenceActivity data={activity} number={number} />;
    case "shape-trace":
      return <ShapeTraceActivity data={activity} number={number} />;
    case "tally-chart":
      return <TallyChartActivity data={activity} number={number} />;
    case "ten-frame":
      return <TenFrameActivity data={activity} number={number} />;
    case "open-response":
      return <OpenResponseActivity data={activity} number={number} />;
    case "home-activity":
      return <HomeActivityActivity data={activity} number={number} />;
    case "picture-graph":
      return <PictureGraphActivity data={activity} number={number} />;
    default:
      return null;
  }
}
