const PageBanner = ({
  subtitle,
  title,
  description,
  bgColor = "bg-giget-blue",
  bgImage,
  bgOpacity = "opacity-20",
  textColors = {},
}) => {
  const {
    subtitle: subtitleColor = "text-white/80",
    title: titleColor = "text-white",
    description: descColor = "text-slate-300",
  } = textColors;

  return (
    <div className={`${bgColor} py-24 relative overflow-hidden`}>
      {bgImage && (
        <div
          className={`absolute inset-0 bg-[url('${bgImage}')] bg-cover bg-center ${bgOpacity}`}
        ></div>
      )}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`${subtitleColor} text-xs font-bold tracking-[0.3em] uppercase`}
          >
            {subtitle}
          </span>
        </div>
        <h1 className={`text-5xl md:text-7xl font-serif ${titleColor} mb-6`}>
          {title}
        </h1>
        <p className={`text-xl ${descColor} max-w-2xl font-light`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
