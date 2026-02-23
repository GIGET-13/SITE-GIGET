import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.pageYOffset);
      });
    };

    // Only detect scroll on desktop to avoid parallax on mobile
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[95vh] md:min-h-[80vh] lg:min-h-[95vh] w-full overflow-hidden flex items-center bg-giget-light">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-giget-red/5"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-14 lg:pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        <motion.div
          className="max-w-2xl will-change-transform mt-16 md:mt-0"
          style={{
            transform: isMobile ? "none" : `translateY(${scrollY * -0.2}px)`,
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-[2px] w-12 bg-giget-red"></span>
            <span className="text-giget-red uppercase tracking-[0.3em] text-xs font-bold">
              Association des Bailleurs Sociaux
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-giget-blue leading-[1.1] mb-8 drop-shadow-sm"
          >
            Expertise Technique <br />
            <span className="italic font-light text-giget-red">
              Au service de l'Habitat.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-lg font-light leading-relaxed mb-10"
          >
            Le GIGET accompagne les bailleurs sociaux dans la gestion technique
            de leur patrimoine : Ascenseurs, Diagnostics, AMO et Plomberie (Viae
            Domo).
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 items-start mt-4"
          >
            <Link to="/ascenseurs" className="hero-btn type--bordeaux">
              <div className="hero-btn__line"></div>
              <div className="hero-btn__line"></div>
              <span className="hero-btn__text">Ascenseurs</span>
              <div className="hero-btn__drows">
                <div className="hero-btn__drow1"></div>
                <div className="hero-btn__drow2"></div>
              </div>
            </Link>
            <Link to="/plomberie" className="hero-btn type--blue">
              <div className="hero-btn__line"></div>
              <div className="hero-btn__line"></div>
              <span className="hero-btn__text">Viae Domo</span>
              <div className="hero-btn__drows">
                <div className="hero-btn__drow1"></div>
                <div className="hero-btn__drow2"></div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full will-change-transform mt-8 md:mt-0"
          style={{
            transform: isMobile ? "none" : `translateY(${scrollY * -0.05}px)`,
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="absolute top-0 right-0 w-[90%] md:top-5 h-full overflow-hidden rounded-tl-[80px] md:rounded-tl-[120px] shadow-2xl border-r-4 md:border-r-8 border-b-4 md:border-b-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1650668015785-742c621331cd?q=80&w=1170&auto=format&fit=crop"
              alt="Intérieur Ascenseur Moderne"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-giget-blue/5"></div>
          </div>

          <motion.div
            className="absolute bottom-4 md:bottom-24 left-0 bg-white p-4 md:p-8 shadow-xl border-l-4 border-giget-red max-w-[200px] sm:max-w-xs z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <p className="font-serif text-3xl text-giget-blue mb-2">
              Transparence
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-500 leading-relaxed">
              Modèle associatif à but non lucratif.
              <br />
              Exclu des procédures de consultation en vertu des articles L2511-1
              à L2511-5 de la commande publique relatifs à la quasi-régie
              (in-house).
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .type--bordeaux {
          --line_color: #800020;
          --back_color: #c74056ff;
        }
        .type--blue {
          --line_color: #004e64;
          --back_color: #04414eff;
        }
        .hero-btn {
          position: relative;
          z-index: 0;
          width: 240px;
          height: 56px;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          color: var(--line_color);
          letter-spacing: 2px;
          transition: all 0.3s ease;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background: transparent;
        }
        .hero-btn__text {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          text-transform: uppercase;
        }
        .hero-btn::before,
        .hero-btn::after,
        .hero-btn__text::before,
        .hero-btn__text::after {
          content: "";
          position: absolute;
          height: 3px;
          border-radius: 2px;
          background: var(--line_color);
          transition: all 0.5s ease;
        }
        .hero-btn::before {
          top: 0;
          left: 54px;
          width: calc(100% - 56px * 2 - 16px);
        }
        .hero-btn::after {
          top: 0;
          right: 54px;
          width: 8px;
        }
        .hero-btn__text::before {
          bottom: 0;
          right: 54px;
          width: calc(100% - 56px * 2 - 16px);
        }
        .hero-btn__text::after {
          bottom: 0;
          left: 54px;
          width: 8px;
        }
        .hero-btn__line {
          position: absolute;
          top: 0;
          width: 56px;
          height: 100%;
          overflow: hidden;
        }
        .hero-btn__line::before {
          content: "";
          position: absolute;
          top: 0;
          width: 150%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 300px;
          border: solid 3px var(--line_color);
        }
        .hero-btn__line:nth-child(1),
        .hero-btn__line:nth-child(1)::before {
          left: 0;
        }
        .hero-btn__line:nth-child(2),
        .hero-btn__line:nth-child(2)::before {
          right: 0;
        }
        .hero-btn:hover {
          letter-spacing: 6px;
          color: #ffffff;
        }
        .hero-btn:hover .hero-btn__text {
          color: #ffffff;
        }
        .hero-btn:hover::before,
        .hero-btn:hover .hero-btn__text::before {
          width: 8px;
        }
        .hero-btn:hover::after,
        .hero-btn:hover .hero-btn__text::after {
          width: calc(100% - 56px * 2 - 16px);
        }
        .hero-btn__drows {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .hero-btn__drow1,
        .hero-btn__drow2 {
          position: absolute;
          border-radius: 16px;
          transform-origin: 16px 16px;
        }
        .hero-btn__drow1 {
          top: -16px;
          left: 40px;
          width: 32px;
          height: 0;
          transform: rotate(30deg);
        }
        .hero-btn__drow2 {
          top: 44px;
          left: 77px;
          width: 32px;
          height: 0;
          transform: rotate(-127deg);
        }
        .hero-btn__drow1::before,
        .hero-btn__drow1::after,
        .hero-btn__drow2::before,
        .hero-btn__drow2::after {
          content: "";
          position: absolute;
        }
        .hero-btn__drow1::before {
          bottom: 0;
          left: 0;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-60deg);
        }
        .hero-btn__drow1::after {
          top: -10px;
          left: 45px;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(69deg);
        }
        .hero-btn__drow2::before {
          bottom: 0;
          left: 0;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-146deg);
        }
        .hero-btn__drow2::after {
          bottom: 26px;
          left: -40px;
          width: 0;
          height: 32px;
          border-radius: 16px;
          transform-origin: 16px 16px;
          transform: rotate(-262deg);
        }
        .hero-btn__drow1,
        .hero-btn__drow1::before,
        .hero-btn__drow1::after,
        .hero-btn__drow2,
        .hero-btn__drow2::before,
        .hero-btn__drow2::after {
          background: var(--back_color);
        }
        .hero-btn:hover .hero-btn__drow1 {
          animation: drow1 ease-in 0.06s;
          animation-fill-mode: forwards;
        }
        .hero-btn:hover .hero-btn__drow1::before {
          animation: drow2 linear 0.08s 0.06s;
          animation-fill-mode: forwards;
        }
        .hero-btn:hover .hero-btn__drow1::after {
          animation: drow3 linear 0.03s 0.14s;
          animation-fill-mode: forwards;
        }
        .hero-btn:hover .hero-btn__drow2 {
          animation: drow4 linear 0.06s 0.2s;
          animation-fill-mode: forwards;
        }
        .hero-btn:hover .hero-btn__drow2::before {
          animation: drow3 linear 0.03s 0.26s;
          animation-fill-mode: forwards;
        }
        .hero-btn:hover .hero-btn__drow2::after {
          animation: drow5 linear 0.06s 0.32s;
          animation-fill-mode: forwards;
        }
        @keyframes drow1 {
          0% { height: 0; }
          100% { height: 100px; }
        }
        @keyframes drow2 {
          0% { width: 0; opacity: 0; }
          10% { opacity: 0; }
          11% { opacity: 1; }
          100% { width: 120px; }
        }
        @keyframes drow3 {
          0% { width: 0; }
          100% { width: 80px; }
        }
        @keyframes drow4 {
          0% { height: 0; }
          100% { height: 120px; }
        }
        @keyframes drow5 {
          0% { width: 0; }
          100% { width: 124px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
