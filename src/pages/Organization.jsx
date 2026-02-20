import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users as UsersIcon } from "lucide-react";

const PILLARS = [
  {
    title: "Association",
    subtitle: "Loi 1901",
    color: "#800020", // Bordeaux Rubis
    summary: "Structure à but non lucratif créée pour mutualiser les coûts et l'expertise. Le GIGET n'a pas vocation à faire du profit mais à optimiser les charges locatives.",
    details: "En tant qu'association Loi 1901, notre indépendance financière et morale est totale. Tous nos adhérents disposent du même niveau d'information et contribuent à part égale aux décisions stratégiques.",
  },
  {
    title: "Gouvernance",
    subtitle: "Bailleurs",
    color: "#1e40af", // Bleu Roi
    summary: "Dirigé par un Conseil d'Administration (CA) composé exclusivement de représentants des Bailleurs Sociaux. Ils valident le budget, les missions et la stratégie.",
    details: "Chaque décision impactant la vie de l'association ou les fonds mutualisés passe par une validation stricte du CA. Cela garantit une transparence absolue et une adéquation parfaite avec les intérêts des locataires.",
  },
  {
    title: "Transparence",
    subtitle: "Financière",
    color: "#b45309", // Bronze Doré
    summary: "Fonctionnement par appel à provisions et Unités d'Œuvre. Restitution systématique des sommes non dépensées en fin d'exercice aux adhérents.",
    details: "Notre modèle repose sur une refacturation au coût réel (Unités d'Œuvre). Des bilans quadrimestriels sont présentés pour piloter précisément le budget et ajuster, si besoin, les provisions appelées.",
  }
];

const PillarCard = ({ title, subtitle, summary, details, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white px-8 py-10 overflow-hidden border border-slate-200 shadow-sm transition-shadow group flex flex-col"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <div
        className="absolute right-4 -top-6 text-[8rem] font-serif opacity-[0.05] pointer-events-none transition-transform duration-500 group-hover:scale-110"
        style={{ color: color }}
      >
        0{index}
      </div>

      <div className="relative z-10 pt-2 flex flex-col h-full">
        <h3 className="text-2xl font-serif font-bold text-giget-blue mb-4 leading-tight">
          {title} <br />
          <span className="font-light">{subtitle}</span>
        </h3>
        <div className="w-12 h-[2px] mb-6 transition-all duration-300 group-hover:w-24" style={{ backgroundColor: color }}></div>

        <p className="text-slate-600 leading-relaxed font-light mb-6 flex-grow">
          {summary}
        </p>

        <div className="pt-4 border-t border-slate-100 mt-2">
          <p className="text-sm font-medium text-slate-700 leading-relaxed">
            {details}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const VIE_ASSOCIATIVE = [
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    frequency: "Annuel",
    title: "Assemblée Générale",
    summary: "Le moment fort de l'année. Réunion de tous les adhérents pour valider les comptes, voter le budget prévisionnel et définir les orientations stratégiques du groupement.",
    details: [
      "Approbation des comptes de l'exercice clos",
      "Vote du budget prévisionnel de l'année N+1",
      "Élection des membres du Conseil d'Administration",
      "Point d'étape sur les chantiers en cours"
    ],
    tag: "Décisions Stratégiques",
    borderColor: "border-giget-red",
    tagColor: "text-giget-red"
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    frequency: "Mensuel",
    title: "Réunions de Bureau",
    summary: "Une gouvernance active avec des réunions mensuelles du Conseil d'Administration pour assurer le pilotage opérationnel et le suivi des missions en cours.",
    details: [
      "Suivi détaillé de l'exécution du budget",
      "Point RH et recrutement",
      "Analyse des performances par pôle (Ascenseurs/Plomberie)",
      "Préparation des grandes échéances"
    ],
    tag: "Pilotage Opérationnel",
    borderColor: "border-giget-blue",
    tagColor: "text-giget-blue"
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    frequency: "Ponctuel",
    title: "Groupes de Travail",
    summary: "Espaces de réflexion technique (Ascenseurs) et juridique pour anticiper les évolutions réglementaires et partager les bonnes pratiques entre bailleurs.",
    details: [
      "Ateliers techniques sur les nouvelles normes (Loi SAE, etc.)",
      "Élaboration commune de cahiers des charges types",
      "Retours d'expériences (REX) sur des sinistres ou innovations",
      "Veille juridique et technologique partagée"
    ],
    tag: "Intelligence Collective",
    borderColor: "border-slate-500",
    tagColor: "text-slate-600"
  }
];

const VieAssociativeCard = ({ image, frequency, title, summary, details, tag, borderColor, tagColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5 }}
      className={`bg-white shadow-xl rounded-sm overflow-hidden flex flex-col h-full border-b-4 ${borderColor} group`}
    >
      <div className="h-48 relative overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute top-4 right-4 bg-white/95 px-3 py-1 text-xs font-bold tracking-widest shadow-sm uppercase ${tagColor}`}>
          {frequency}
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h4 className="font-serif text-2xl text-giget-blue mb-4">
          {title}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {summary}
        </p>

        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            {details.map((item, idx) => (
              <li
                key={idx}
                className="flex text-xs text-slate-700 items-start gap-2"
              >
                <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 bg-slate-300 group-hover:bg-current transition-colors ${tagColor}`}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-slate-100 mt-auto flex items-center justify-between">
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
            {tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

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

        {/* 3 Pillars - INTERACTIVE DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={index} {...pillar} index={index + 1} />
          ))}
        </div>

        {/* Life of Association - INTERACTIVE DESIGN */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] flex-grow bg-slate-200"></div>
            <h3 className="text-3xl font-serif text-giget-blue text-center flex items-center gap-3">
              <UsersIcon className="w-8 h-8 text-giget-red" />
              La Vie Associative
            </h3>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {VIE_ASSOCIATIVE.map((item, index) => (
              <VieAssociativeCard key={index} {...item} />
            ))}
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
