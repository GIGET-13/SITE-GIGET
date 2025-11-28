import { CheckBadgeIcon } from "../icons/CheckBadgeIcon";

const ElevatorServices = () => {
  return (
    <section className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-giget-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543593450-4faaab9a0f6e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-white/80 text-xs font-bold tracking-[0.3em] uppercase">
              Expertise Technique
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Pôle Ascenseurs
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">
            Garantir la sécurité, la conformité et la disponibilité des
            installations pour le confort des locataires.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
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
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1664300696727-86e9d330541e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Illustration Ascenseur"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Services Grid Title */}
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-giget-red mx-auto mb-4"></div>
          <h2 className="text-3xl font-serif text-giget-blue">Nos Missions</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-slate-50 p-10 border border-slate-100 hover:border-giget-red transition-colors group">
            <div className="text-giget-red font-bold text-xl mb-4 group-hover:translate-x-2 transition-transform">
              01. Contrôles & Diagnostics
            </div>
            <h3 className="text-2xl font-serif text-giget-blue mb-4">
              Suivi du Parc
            </h3>
            <p className="text-slate-600 mb-6">
              Réalisation des Contrôles Techniques Quinquennaux (CTQ),
              diagnostics de vétusté, et audits de maintenance inopinés pour
              vérifier la réalité des visites.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-slate-50 p-10 border border-slate-100 hover:border-giget-red transition-colors group">
            <div className="text-giget-red font-bold text-xl mb-4 group-hover:translate-x-2 transition-transform">
              02. Assistance Maîtrise d'Ouvrage
            </div>
            <h3 className="text-2xl font-serif text-giget-blue mb-4">
              AMO & MOE
            </h3>
            <p className="text-slate-600 mb-6">
              Accompagnement complet pour les travaux de modernisation,
              remplacement complet ou mise en conformité. Rédaction des CCTP,
              analyse des offres et suivi de chantier.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-slate-50 p-10 border border-slate-100 hover:border-giget-red transition-colors group">
            <div className="text-giget-red font-bold text-xl mb-4 group-hover:translate-x-2 transition-transform">
              03. Gestion Administrative
            </div>
            <h3 className="text-2xl font-serif text-giget-blue mb-4">
              Suivi des Contrats
            </h3>
            <p className="text-slate-600 mb-6">
              Vérification des factures, application des pénalités de retard, et
              gestion des clauses contractuelles pour défendre les intérêts
              financiers du bailleur.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-slate-50 p-10 border border-slate-100 hover:border-giget-red transition-colors group">
            <div className="text-giget-red font-bold text-xl mb-4 group-hover:translate-x-2 transition-transform">
              04. Levée des Réserves
            </div>
            <h3 className="text-2xl font-serif text-giget-blue mb-4">
              Réception de Travaux
            </h3>
            <p className="text-slate-600 mb-6">
              Contrôle rigoureux en fin de chantier pour s'assurer que tous les
              travaux prévus ont été réalisés selon les règles de l'art avant le
              paiement final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorServices;
