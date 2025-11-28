import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.pageYOffset);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[95vh] md:min-h-[80vh] lg:min-h-[95vh] w-full overflow-hidden flex items-center bg-giget-light">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-giget-red/5"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-20 lg:pt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        <div
          className="max-w-2xl will-change-transform"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-12 bg-giget-red"></span>
            <span className="text-giget-red uppercase tracking-[0.3em] text-xs font-bold">
              Association des Bailleurs Sociaux
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-giget-blue leading-[1.1] mb-8 drop-shadow-sm">
            Expertise Technique <br />
            <span className="italic font-light text-giget-red">
              Au service de l'Habitat.
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-lg font-light leading-relaxed mb-10">
            Le GIGET accompagne les bailleurs sociaux dans la gestion technique
            de leur patrimoine : Ascenseurs, Diagnostics, AMO et Plomberie (Viae
            Domo).
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Link
              to="/ascenseurs"
              className="group px-10 py-4 bg-giget-red text-white font-medium tracking-widest uppercase shadow-xl hover:shadow-2xl hover:bg-[#600018] transition-all duration-500"
            >
              Pôle Ascenseurs
            </Link>
            <Link
              to="/plomberie"
              className="px-10 py-4 border border-giget-blue text-giget-blue font-medium tracking-widest uppercase hover:bg-giget-blue hover:text-white transition-all duration-300"
            >
              Viae Domo
            </Link>
          </div>
        </div>

        <div
          className="hidden md:block relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full will-change-transform"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <div className="absolute top-10 right-0 w-[90%] h-full overflow-hidden rounded-tl-[120px] shadow-2xl border-r-8 border-b-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1650668015785-742c621331cd?q=80&w=1170&auto=format&fit=crop"
              alt="Intérieur Ascenseur Moderne"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-giget-blue/5"></div>
          </div>

          <div
            className="absolute bottom-24 left-0 bg-white p-8 shadow-xl border-l-4 border-giget-red max-w-xs z-20"
            style={{ transform: `translateY(${scrollY * -0.12}px)` }}
          >
            <p className="font-serif text-3xl text-giget-blue mb-2">
              Transparence
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-500 leading-relaxed">
              Modèle associatif à but non lucratif. Restitution des provisions
              aux adhérents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
