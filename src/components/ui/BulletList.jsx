const BulletList = ({ items, color = "bg-giget-red" }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li
        key={index}
        className="flex items-center gap-2 text-slate-700 font-medium"
      >
        <div className={`w-2 h-2 rounded-full ${color}`}></div>
        {item}
      </li>
    ))}
  </ul>
);

export default BulletList;
