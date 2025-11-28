import { CheckBadgeIcon } from "../../icons/CheckBadgeIcon";

const FeatureList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-center gap-3">
        <CheckBadgeIcon className="w-5 h-5 text-giget-red" />
        <span className="font-bold text-giget-blue">{item}</span>
      </li>
    ))}
  </ul>
);

export default FeatureList;
