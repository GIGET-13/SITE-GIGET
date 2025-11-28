const FeatureCard = ({
  icon: Icon,
  title,
  description,
  items,
  borderColor = "border-giget-red",
  iconBg = "bg-red-50",
  iconHoverBg = "group-hover:bg-giget-red",
  textColor = "text-giget-red",
  bulletColor = "bg-giget-red",
}) => (
  <div
    className={`bg-white rounded-xl shadow-lg border-t-8 ${borderColor} p-8 md:p-12 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
  >
    <div
      className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mb-8 ${iconHoverBg} transition-colors`}
    >
      <Icon
        className={`w-8 h-8 ${textColor} group-hover:text-white transition-colors`}
      />
    </div>
    <h3 className={`text-3xl font-serif ${textColor} mb-4`}>{title}</h3>
    <div className="w-12 h-1 bg-red-100 mb-6"></div>
    <p className="text-slate-600 leading-relaxed text-lg mb-8">{description}</p>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-2 text-slate-700 font-medium"
        >
          <div className={`w-2 h-2 rounded-full ${bulletColor}`}></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default FeatureCard;
