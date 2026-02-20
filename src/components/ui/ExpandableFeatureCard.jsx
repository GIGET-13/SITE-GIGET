import { motion } from "framer-motion";

const ExpandableFeatureCard = ({
    icon: Icon,
    title,
    description,
    items,
    topBorderColor = "border-t-giget-red",
    iconBg = "bg-red-50",
    iconHoverBg = "group-hover:bg-giget-red",
    textColor = "text-giget-red",
    bulletColor = "bg-giget-red"
}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`bg-white p-8 md:p-10 border border-slate-100 hover:shadow-xl transition-all group overflow-hidden border-t-4 ${topBorderColor} flex flex-col h-full`}
        >
            <div className="flex items-start gap-6 mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${iconBg} ${iconHoverBg}`}>
                    <Icon className={`w-6 h-6 ${textColor} group-hover:text-white transition-colors duration-500`} />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-serif text-giget-blue mb-3">{title}</h3>
                    <p className="text-slate-600 leading-relaxed">{description}</p>
                </div>
            </div>

            <div className="pt-6 border-t border-slate-100/50 mt-auto flex-grow flex flex-col justify-end">
                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-4 text-slate-700 font-medium"
                        >
                            <div className={`w-2 h-2 rounded-full ${bulletColor} shrink-0`}></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ExpandableFeatureCard;
