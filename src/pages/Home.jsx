import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const RevealText = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const ParallaxImage = ({ src, alt, className, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: colorProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], reverse ? ["35%", "-35%"] : ["-35%", "35%"]);

  const grayscale = useTransform(colorProgress, [0, 1], ["100%", "0%"]);
  const brightness = useTransform(colorProgress, [0, 1], [0.6, 1]);
  const filter = useMotionTemplate`grayscale(${grayscale}) brightness(${brightness})`;

  return (
    <motion.div
      ref={ref}
      style={{ filter }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div style={{ y, scale: 1.7 }} className="absolute inset-0 w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  return (
    <section id="about" className="bg-white overflow-hidden">
      {/* SECTION 1: INTRO (Mobile/Tablet: Text -> Image | Desktop: Image -> Text) */}
      <div className="flex flex-col-reverse lg:flex-row min-h-[90vh]">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[40vh] md:min-h-[50vh] lg:h-auto">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?q=80&w=1935&auto=format&fit=crop"
            alt="Architecture Moderne Marseille"
            className="w-full h-full absolute inset-0"
          />
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-white relative z-10">
          <div className="max-w-xl">
            <RevealText delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-giget-red"></div>
                <span className="text-giget-red text-xs font-bold tracking-[0.2em] uppercase">
                  GIGET
                </span>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-serif text-giget-blue mb-8 leading-tight">
                Bienvenue au GIGET, votre partenaire technique à Marseille
              </h2>
            </RevealText>

            <RevealText delay={0.3}>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light text-justify">
                Le GIGET (Groupement des Indépendants en Gestion d'Équipements
                Techniques) est une association de bailleurs sociaux marseillais
                dédiée à l'optimisation et à la gestion mutualisée des services
                techniques essentiels.
              </p>
            </RevealText>

            <RevealText delay={0.4}>
              <div className="border-l-4 border-giget-red pl-6 py-2">
                <p className="text-sm text-slate-500 italic text-justify leading-relaxed">
                  "Notre mission est de garantir la qualité, la sécurité et la pérennité
                  des équipements au sein de votre patrimoine immobilier, avec un
                  engagement constant envers l'efficience et la transparence."
                </p>
              </div>
            </RevealText>
          </div>
        </div>
      </div>

      {/* SECTION 2: PHILOSOPHY (Mobile/Tablet: Text -> Image | Desktop: Text -> Image) */}
      <div className="flex flex-col lg:flex-row min-h-[90vh]">
        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-giget-light relative z-10">
          <div className="max-w-md">
            <RevealText delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-giget-red"></div>
                <span className="text-giget-red text-xs font-bold tracking-[0.2em] uppercase">
                  Philosophie
                </span>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-serif text-giget-blue mb-8 leading-tight">
                Notre Mission : Expertise Technique au Service Social
              </h2>
            </RevealText>

            <RevealText delay={0.3}>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light text-justify">
                La philosophie du GIGET est ancrée dans l'excellence technique et
                le service à l'habitant. Nous œuvrons pour une gestion collective
                et désintéressée, où notre expertise en matière d'ascenseurs et de
                plomberie Viae Domo est mise au service exclusif de nos membres.
                Notre statut d'association privilégie l'intérêt général en offrant
                des solutions durables, loin de toute logique lucrative.
              </p>
            </RevealText>

            <RevealText delay={0.4}>
              <div className="border-l-4 border-giget-red pl-6 py-2">
                <p className="text-sm text-slate-500 italic text-justify leading-relaxed">
                  "Totalement indépendants, notre modèle garantit l'optimisation
                  des coûts par la restitution des excédents à nos adhérents. Cette
                  mutualisation nous offre une maîtrise inégalée sur la qualité des
                  prestations techniques au bénéfice direct des locataires."
                </p>
              </div>
            </RevealText>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[40vh] md:min-h-[50vh] lg:h-auto">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop"
            alt="Technicien GIGET"
            className="w-full h-full absolute inset-0"
            reverse={true}
          />
          <div className="absolute inset-0 bg-[#98b4c1]/15 mix-blend-multiply transition-opacity duration-500 z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
