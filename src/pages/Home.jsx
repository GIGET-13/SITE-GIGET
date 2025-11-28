import { useEffect, useRef } from "react";

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-white overflow-hidden" ref={sectionRef}>
      {/* SECTION 1: INTRO (Mobile/Tablet: Text -> Image | Desktop: Image -> Text) */}
      <div className="flex flex-col-reverse lg:flex-row min-h-[90vh]">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[40vh] md:min-h-[50vh] lg:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?q=80&w=1935&auto=format&fit=crop"
            alt="Architecture Moderne Marseille"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-white relative">
          <div className="max-w-md reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-giget-red"></div>
              <span className="text-giget-red text-xs font-bold tracking-[0.2em] uppercase">
                GIGET
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif text-giget-blue mb-8 leading-tight">
              Bienvenue au GIGET, votre partenaire technique à Marseille
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light text-justify">
              Le GIGET (Groupement des Indépendants en Gestion d'Équipements
              Techniques) est une association de bailleurs sociaux marseillais
              dédiée à l'optimisation et à la gestion mutualisée des services
              techniques essentiels. Notre mission est de garantir la qualité,
              la sécurité et la pérennité des équipements au sein de votre
              patrimoine immobilier, avec un engagement constant envers
              l'efficience et la transparence.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: PHILOSOPHY (Mobile/Tablet: Text -> Image | Desktop: Text -> Image) */}
      <div className="flex flex-col lg:flex-row min-h-[90vh]">
        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-giget-light relative">
          <div className="max-w-md reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-giget-red"></div>
              <span className="text-giget-red text-xs font-bold tracking-[0.2em] uppercase">
                Philosophie
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif text-giget-blue mb-8 leading-tight">
              Notre Mission : Expertise Technique au Service Social
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light text-justify">
              Au cœur de notre démarche associative, la philosophie du GIGET est
              ancrée dans l'excellence technique et le service à l'habitant.
              Nous œuvrons pour une gestion collective et désintéressée, où
              notre expertise en matière d'ascenseurs et de plomberie Viae Domo
              est mise au service exclusif de nos membres. Notre statut
              d'association loi 1901 nous permet de privilégier l'intérêt
              général et le bien-être des résidents, en offrant des solutions
              techniques robustes et durables, éloignées de toute logique
              lucrative, et en favorisant une approche collaborative et
              transparente.
            </p>

            <div className="border-l-2 border-giget-red pl-6 py-2">
              <p className="text-sm text-slate-500 italic text-justify">
                "En tant qu'association loi 1901, le GIGET garantit une totale
                indépendance vis-à-vis des intérêts commerciaux. Notre modèle
                repose sur la restitution des fonds excédentaires à nos membres,
                assurant une gestion transparente et une optimisation constante
                des coûts au bénéfice direct des locataires. Cette mutualisation
                des compétences et des ressources nous offre un pouvoir de
                contrôle accru sur les prestations, qu'il s'agisse de la
                maintenance des ascenseurs ou des interventions de plomberie
                Viae Domo, vous offrant une maîtrise inégalée sur la qualité et
                la pertinence des services techniques."
              </p>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[40vh] md:min-h-[50vh] lg:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop"
            alt="Technicien GIGET"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-giget-blue/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
