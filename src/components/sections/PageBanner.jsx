import { motion } from "framer-motion";

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
    <div className={`${bgColor} pt-[120px] pb-10 relative overflow-hidden`}>
      {bgImage && (
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${bgOpacity}`}
            style={{ backgroundImage: `url('${bgImage}')` }}
          ></div>
        </motion.div>
      )}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-3 mb-4"
        >
          <span
            className={`${subtitleColor} text-xs font-bold tracking-[0.3em] uppercase`}
          >
            {subtitle}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className={`text-5xl md:text-7xl font-serif ${titleColor} mb-6`}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className={`text-xl ${descColor} max-w-2xl font-light`}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default PageBanner;
