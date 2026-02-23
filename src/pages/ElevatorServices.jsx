import { useState } from "react";
import { CheckBadgeIcon } from "../icons/CheckBadgeIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import AnimatedModal from "../components/ui/AnimatedModal";
import PageBanner from "../components/sections/PageBanner";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "controles",
    subtitle: "01. Contrôles & Diagnostics",
    title: "Suivi du Parc",
    summary:
      "Réalisation des Contrôles Techniques Quinquennaux (CTQ), diagnostics de vétusté, et audits de maintenance inopinés pour vérifier la réalité des visites.",
    details: (
      <div className="space-y-6">
        <p>
          Nos experts assurent un suivi rigoureux de votre parc d'ascenseurs en
          réalisant des contrôles périodiques et inopinés. L'objectif est de
          garantir non seulement le respect strict de la réglementation en
          vigueur (dont la loi SAE), mais aussi d'optimiser la durée de vie de
          vos équipements.
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Contrôles Techniques Quinquennaux (CTQ)</strong> complets
              pour certifier la sécurité.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Diagnostics de vétusté</strong> afin d'anticiper les
              modernisations budgétaires.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Audits de maintenance inopinés</strong> pour vérifier les
              passages réels des techniciens ascensoristes et la qualité des
              opérations effectuées.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "amo",
    subtitle: "02. Assistance Maîtrise d'Ouvrage",
    title: "AMO & MOE",
    summary:
      "Accompagnement complet pour les travaux de modernisation, remplacement complet ou mise en conformité. Rédaction des CCTP, analyse des offres et suivi de chantier.",
    details: (
      <div className="space-y-6">
        <p>
          Le GIGET agit en tant que partenaire technique du bailleur pour tous
          les projets lourds. La modernisation ou le remplacement d'un ascenseur
          sont des investissements majeurs que nous sécurisons techniquement et
          financièrement.
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Rédaction CCTP :</strong> Élaboration des Cahiers des
              Clauses Techniques Particulières pour définir précisément le
              besoin.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Analyse des offres :</strong> Dépouillement technique et
              financier des propositions des prestataires, négociation.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Suivi de chantier :</strong> Pilotage complet depuis la
              réunion de lancement jusqu'à la réception technique.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "gestion",
    subtitle: "03. Gestion Administrative",
    title: "Suivi des Contrats",
    summary:
      "Vérification des factures, application des pénalités de retard, et gestion des clauses contractuelles pour défendre les intérêts financiers du bailleur.",
    details: (
      <div className="space-y-6">
        <p>
          Une gestion fine de vos contrats de maintenance est indispensable.
          Derrière chaque ligne de facturation, nous mettons en œuvre un
          contrôle administratif exhaustif afin de garantir que vous ne payez
          que ce qui est dû.
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Vérification des factures :</strong> Contrôle de
              l'adéquation entre devis et facturation des ascensoristes.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Pénalités :</strong> Calcul et application stricte des
              pénalités de retard lors des pannes.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Clauses contractuelles :</strong> Suivi des indicateurs de
              performance (KPIs) pour assurer un taux de disponibilité maximal.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "reception",
    subtitle: "04. Levée des Réserves",
    title: "Réception de Travaux",
    summary:
      "Contrôle rigoureux en fin de chantier pour s'assurer que tous les travaux prévus ont été réalisés selon les règles de l'art avant le paiement final.",
    details: (
      <div className="space-y-6">
        <p>
          La fin d'un chantier nécessite une inspection méticuleuse. Notre
          équipe d'ingénieurs procède à un audit complet de la qualité des
          travaux avant la réception définitive de l'équipement, vous protégeant
          ainsi contre les malfaçons.
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Audit de fin de travaux :</strong> Traitement technique
              complet des réceptions.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Conformité :</strong> Vérification de la Déclaration de
              Conformité et des Procès Verbaux.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <CheckBadgeIcon className="w-6 h-6 text-giget-red flex-shrink-0" />
            <span className="text-slate-700">
              <strong>Levée des réserves :</strong> Émission du rapport de
              réserves et suivi sans concession jusqu'à résolution totale.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
];

const ElevatorServices = () => {
  const [activeModal, setActiveModal] = useState(null);

  const activeService = SERVICES.find((s) => s.id === activeModal);
  const activeIndex = SERVICES.findIndex((s) => s.id === activeModal);
  const handlePrev =
    activeIndex > 0 ? () => setActiveModal(SERVICES[activeIndex - 1].id) : null;
  const handleNext =
    activeIndex !== -1 && activeIndex < SERVICES.length - 1
      ? () => setActiveModal(SERVICES[activeIndex + 1].id)
      : null;

  return (
    <section className="bg-white min-h-screen">
      {/* Header Banner */}
      <PageBanner
        subtitle="Expertise Technique"
        title="Pôle Ascenseurs"
        description="Garantir la sécurité, la conformité et la disponibilité des installations pour le confort des locataires."
        bgColor="bg-giget-blue"
        bgImage="https://images.unsplash.com/photo-1543593450-4faaab9a0f6e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgOpacity="opacity-20"
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-serif text-giget-blue mb-6">
              Contrôle & Maîtrise
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Le GIGET agit comme le tiers de confiance technique des bailleurs.
              Nos chargés d'affaires et consultants ascenseurs surveillent en
              permanence l'état du parc et la qualité des prestations des
              ascensoristes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-giget-red" />
                <span className="font-bold text-giget-blue">
                  Indépendance totale des prestataires
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-giget-red" />
                <span className="font-bold text-giget-blue">
                  Expertise réglementaire (Loi SAE)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-giget-red" />
                <span className="font-bold text-giget-blue">
                  Optimisation des coûts de maintenance
                </span>
              </li>
            </ul>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            src="/man-electrical-technician-working-switchboard-with-fuses-uses-tablet.jpg"
            alt="Illustration Ascenseur"
            className="w-full h-auto object-cover shadow-2xl"
          />
        </div>

        {/* Services Grid Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-1 bg-giget-red mx-auto mb-4"></div>
          <h2 className="text-3xl font-serif text-giget-blue">Nos Missions</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.id}
              className="bg-slate-50 p-10 border border-slate-100 hover:border-giget-red/50 transition-all hover:shadow-xl group flex flex-col justify-between cursor-pointer"
              onClick={() => setActiveModal(service.id)}
            >
              <div>
                <div className="text-giget-red font-bold text-xl mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {service.subtitle}
                </div>
                <h3 className="text-2xl font-serif text-giget-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">{service.summary}</p>
              </div>
              <button
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-giget-blue group-hover:text-giget-red transition-colors"
                tabIndex="-1"
              >
                Voir plus
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatedModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeService?.title}
        subtitle={activeService?.subtitle}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        {activeService?.details}
      </AnimatedModal>
    </section>
  );
};

export default ElevatorServices;
