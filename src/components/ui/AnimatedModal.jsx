import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const XIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const AnimatedModal = ({ isOpen, onClose, title, subtitle, children, onNext, onPrev }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-6 md:px-12">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-slate-900/10 backdrop-blur-[3px]"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />

                    {/* Modal Container */}
                    <motion.div
                        className="relative w-full max-w-3xl bg-white/95 backdrop-blur-xl shadow-2xl border-t-4 border-giget-red flex flex-col max-h-[90vh]"
                        initial={{ scale: 0.95, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300, delay: 0.05 }}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between p-8 border-b border-slate-100 bg-slate-50/50 relative">
                            <div>
                                <span className="text-giget-red text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                                    {subtitle}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif text-giget-blue pr-10">
                                    {title}
                                </h3>
                            </div>
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 p-2 text-giget-red cursor-pointer transition-transform hover:scale-110 z-10"
                                aria-label="Fermer la modale"
                            >
                                <XIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-slate-600 leading-relaxed text-lg"
                            >
                                {children}
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 min-h-[85px]">
                            <button
                                onClick={onClose}
                                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-500 font-bold py-3 px-8 transition-all hover:text-giget-red hover:border-giget-red/30 tracking-widest text-xs uppercase shadow-sm"
                            >
                                Fermer
                            </button>
                            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-2 w-full sm:w-auto">
                                {onPrev && (
                                    <button onClick={onPrev} className="w-full sm:w-auto px-5 py-3 bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-giget-blue hover:text-giget-red hover:border-giget-red/30 transition-all rounded-sm shadow-sm flex items-center justify-center gap-2">
                                        &larr; <span>Précédent</span>
                                    </button>
                                )}
                                {onNext && (
                                    <button onClick={onNext} className="group relative w-full sm:w-auto bg-[#016fae] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-[#015282] transition-all duration-300 shadow-md flex items-center justify-center overflow-hidden">
                                        <span className="transition-transform duration-300 sm:group-hover:-translate-x-5">
                                            Suivant
                                        </span>
                                        <span className="hidden sm:block absolute right-5 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedModal;
