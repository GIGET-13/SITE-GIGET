import { useEffect, useRef } from "react";

const Organization = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Centrer l'organigramme au chargement pour la vue mobile
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  return (
    <section className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-giget-red text-xs font-bold tracking-[0.3em] uppercase">
            Gouvernance & Modèle
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-giget-blue mt-4">
            Notre Fonctionnement
          </h2>
          <div className="w-24 h-1 bg-giget-red mx-auto mt-8"></div>
        </div>

        {/* 3 Pillars - STATIC DESIGN (No Hover Effects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Card 1: Bordeaux Rubis Accent */}
          <div className="relative bg-white px-10 py-10 overflow-hidden border border-slate-200 border-t-4 border-t-[#800020] shadow-sm">
            <div className="absolute right-4 -top-6 text-[8rem] font-serif text-[#800020] opacity-10 pointer-events-none">
              01
            </div>
            <div className="relative z-10 pt-2">
              <h3 className="text-2xl font-serif font-bold text-giget-blue mb-6">
                Association <br />
                Loi 1901
              </h3>
              <div className="w-12 h-[2px] bg-[#800020] mb-6"></div>
              <p className="text-slate-600 leading-relaxed font-light">
                Structure à but non lucratif créée pour mutualiser les coûts et
                l'expertise. Le GIGET n'a pas vocation à faire du profit mais à
                optimiser les charges locatives.
              </p>
            </div>
          </div>

          {/* Card 2: Bleu Roi Profond Accent */}
          <div className="relative bg-white px-10 py-10 overflow-hidden border border-slate-200 border-t-4 border-t-[#1e40af] shadow-sm">
            <div className="absolute right-4 -top-6 text-[8rem] font-serif text-[#1e40af] opacity-10 pointer-events-none">
              02
            </div>
            <div className="relative z-10 pt-2">
              <h3 className="text-2xl font-serif font-bold text-giget-blue mb-6">
                Gouvernance <br />
                Bailleurs
              </h3>
              <div className="w-12 h-[2px] bg-[#1e40af] mb-6"></div>
              <p className="text-slate-600 leading-relaxed font-light">
                Dirigé par un Conseil d'Administration (CA) composé
                exclusivement de représentants des Bailleurs Sociaux. Ils
                valident le budget, les missions et la stratégie.
              </p>
            </div>
          </div>

          {/* Card 3: Bronze Doré Accent */}
          <div className="relative bg-white px-10 py-10 overflow-hidden border border-slate-200 border-t-4 border-t-[#b45309] shadow-sm">
            <div className="absolute right-4 -top-6 text-[8rem] font-serif text-[#b45309] opacity-10 pointer-events-none">
              03
            </div>
            <div className="relative z-10 pt-2">
              <h3 className="text-2xl font-serif font-bold text-giget-blue mb-6">
                Transparence <br />
                Financière
              </h3>
              <div className="w-12 h-[2px] bg-[#b45309] mb-6"></div>
              <p className="text-slate-600 leading-relaxed font-light">
                Fonctionnement par appel à provisions et "Unités d'Œuvre".
                Restitution systématique des sommes non dépensées en fin
                d'exercice aux adhérents.
              </p>
            </div>
          </div>
        </div>

        {/* Life of Association - NEW DESIGN (Informative Cards) */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] flex-grow bg-slate-200"></div>
            <h3 className="text-3xl font-serif text-giget-blue text-center">
              La Vie Associative
            </h3>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Card Life 1 */}
            <div className="bg-white shadow-xl rounded-sm overflow-hidden flex flex-col h-full border-b-4 border-giget-red">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                  alt="AG"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 text-xs font-bold tracking-widest text-giget-red shadow-sm uppercase">
                  Annuel
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="font-serif text-2xl text-giget-blue mb-4">
                  Assemblée Générale
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  Le moment fort de l'année. Réunion de tous les adhérents pour
                  valider les comptes, voter le budget prévisionnel et définir
                  les orientations stratégiques du groupement.
                </p>
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Décisions Stratégiques
                  </span>
                </div>
              </div>
            </div>

            {/* Card Life 2 */}
            <div className="bg-white shadow-xl rounded-sm overflow-hidden flex flex-col h-full border-b-4 border-giget-blue">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Bureau"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 text-xs font-bold tracking-widest text-giget-blue shadow-sm uppercase">
                  Mensuel
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="font-serif text-2xl text-giget-blue mb-4">
                  Réunions de Bureau
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  Une gouvernance active avec des réunions mensuelles du Conseil
                  d'Administration pour assurer le pilotage opérationnel et le
                  suivi des missions en cours.
                </p>
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Pilotage Opérationnel
                  </span>
                </div>
              </div>
            </div>

            {/* Card Life 3 */}
            <div className="bg-white shadow-xl rounded-sm overflow-hidden flex flex-col h-full border-b-4 border-slate-500">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                  alt="Groupe travail"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 text-xs font-bold tracking-widest text-slate-600 shadow-sm uppercase">
                  Ponctuel
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="font-serif text-2xl text-giget-blue mb-4">
                  Groupes de Travail
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  Espaces de réflexion technique (Ascenseurs) et juridique pour
                  anticiper les évolutions réglementaires et partager les bonnes
                  pratiques entre bailleurs.
                </p>
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Intelligence Collective
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organigramme Visuel */}
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden relative">
          {/* Title pinned at top */}
          <div className="text-center py-10 relative z-20 bg-white/95 backdrop-blur-sm border-b border-slate-100">
            <h3 className="text-3xl font-serif text-giget-blue">
              Organigramme interne GIGET
            </h3>
          </div>

          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#800020 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          {/* SCROLLABLE AREA */}
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-16 pt-8 px-8"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* FORCE MIN WIDTH to allow horizontal layout */}
            <div className="flex flex-col items-center relative z-10 w-full min-w-[900px]">
              {/* LEVEL 1: PRESIDENT */}
              <div className="bg-white border-2 border-giget-blue px-10 py-4 text-center mb-12 relative shadow-md z-20 min-w-[250px]">
                <h4 className="text-lg font-bold text-giget-red tracking-widest uppercase mb-1">
                  Président
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  Bailleurs Sociaux
                </p>
                {/* Line Down */}
                <div className="absolute -bottom-12 left-1/2 w-[2px] h-12 bg-giget-blue"></div>
              </div>

              {/* LEVEL 2: DIRECTEUR */}
              <div className="bg-white border border-slate-300 px-10 py-4 text-center mb-16 relative shadow-sm z-20 min-w-[250px]">
                <h4 className="text-lg font-bold text-giget-blue">Directeur</h4>
                {/* Line Down to split */}
                <div className="absolute -bottom-8 left-1/2 w-[2px] h-8 bg-slate-300"></div>
              </div>

              {/* LEVEL 3: GRID LAYOUT FOR BRANCHES */}
              <div className="relative w-full max-w-6xl">
                {/* Connector Bar Horizontal */}
                <div className="absolute -top-8 left-[16%] right-[16%] h-[2px] bg-slate-300"></div>
                {/* Connector Lines Vertical to items */}
                <div className="absolute -top-8 left-[16%] h-8 w-[2px] bg-slate-300"></div>
                <div className="absolute -top-8 left-1/2 h-8 w-[2px] bg-slate-300"></div>
                <div className="absolute -top-8 right-[16%] h-8 w-[2px] bg-slate-300"></div>

                <div className="grid grid-cols-3 gap-8">
                  {/* COL 1: SERVICES TRANSVERSES */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="bg-slate-50 p-6 rounded border-t-4 border-gray-400 w-full text-center shadow-sm">
                      <h5 className="font-bold text-giget-blue text-lg">
                        Services Transverses
                      </h5>
                      <div className="mt-3 space-y-2">
                        <div className="text-sm font-medium text-slate-600 bg-white py-1 px-3 rounded border border-slate-100">
                          RH
                        </div>
                        <div className="text-sm font-medium text-slate-600 bg-white py-1 px-3 rounded border border-slate-100">
                          Chargé Informatique
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* COL 2: PÔLE ASCENSEUR */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="bg-slate-50 p-6 rounded border-t-4 border-giget-red w-full text-center shadow-sm relative">
                      <h5 className="font-bold text-giget-blue text-lg">
                        Pôle Ascenseurs
                      </h5>

                      <div className="mt-4 flex flex-col items-center gap-4">
                        <div className="text-sm font-bold text-giget-red bg-white py-2 px-4 rounded border border-slate-100 shadow-sm w-full">
                          Chargé d'Affaires Ascenseur
                        </div>

                        {/* Link Down */}
                        <div className="h-4 w-[1px] bg-slate-300"></div>

                        <div className="text-sm text-slate-600 bg-white py-1 px-3 rounded border border-slate-100 w-[90%]">
                          Assistante Technique
                        </div>

                        {/* Link Down */}
                        <div className="h-4 w-[1px] bg-slate-300"></div>

                        <div className="bg-white py-3 px-4 rounded border border-slate-100 w-full">
                          <span className="text-sm font-bold text-giget-blue block">
                            Consultants Ascenseurs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* COL 3: PÔLE PLOMBERIE */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="bg-slate-50 p-6 rounded border-t-4 border-blue-500 w-full text-center shadow-sm">
                      <h5 className="font-bold text-giget-blue text-lg">
                        Pôle Viae Domo
                      </h5>
                      <div className="mt-4">
                        <div className="bg-white py-3 px-4 rounded border border-slate-100 w-full">
                          <span className="text-sm font-bold text-giget-blue block">
                            Consultants Plomberie
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Hint for Mobile Scroll */}
          <div className="block md:hidden text-center pb-4 text-xs text-slate-400 animate-pulse">
            &larr; Glisser pour voir l'organigramme &rarr;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
