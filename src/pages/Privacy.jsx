const Privacy = () => {
  return (
    <section className="bg-white min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-giget-blue mb-12">
          Politique de Confidentialité
        </h1>

        <div className="space-y-12 text-slate-600 leading-relaxed">
          <div className="bg-slate-50 p-6 border-l-4 border-giget-red">
            <p className="italic text-sm">
              Le GIGET (ci-après "nous") s'engage résolument à ce que la collecte et le traitement de vos
              données, effectués à partir du présent site web, soient rigoureusement
              conformes au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et à la loi
              "Informatique et Libertés" n°78-17 modifiée.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              1. Responsable du Traitement des Données
            </h2>
            <p className="mt-2">
              Le responsable du traitement des données personnelles collectées via ce site est l'association <strong>GIGET</strong>, dont le siège social est situé au <a href="https://maps.google.com/?q=97+Avenue+de+la+Corse,+13007+Marseille" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-slate-100 text-giget-blue px-2 py-0.5 rounded-md text-sm font-medium hover:bg-giget-red hover:text-white transition-colors border border-slate-200 shadow-sm mx-1"> 97 Avenue de la Corse, 13007 Marseille</a>. L'association détermine les finalités et les moyens des traitements mis en œuvre.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              2. Nature des données collectées
            </h2>
            <p className="mt-2">
              Dans le cadre de l'utilisation de notre site, la collecte s'opère selon le principe strict de la minimisation (article 5.1.c du RGPD). Nous collectons les informations suivantes via notre formulaire de contact :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Données d'identification :</strong> Nom, Prénom.</li>
              <li><strong>Coordonnées :</strong> Numéro de téléphone, adresse électronique professionnelle ou personnelle.</li>
              <li><strong>Contenu des messages :</strong> Informations librement transmises lors de vos requêtes (veillez à ne mentionner aucune donnée dite "sensible").</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              3. Finalité et base légale du traitement
            </h2>
            <p className="mt-2">
              Chaque formulaire limite la collecte des données personnelles au strict nécessaire. Les traitements mis en œuvre ont pour base juridique :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>L'intérêt légitime (art. 6.1.f RGPD) :</strong> Fournir une réponse à une prise de contact, traiter les requêtes administratives ou commerciales.</li>
              <li><strong>L'exécution de mesures précontractuelles ou contractuelles (art. 6.1.b RGPD) :</strong> Élaboration de devis d'interventions, adhésion ou suivi des membres.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              4. Destinataires et Transfert des données
            </h2>
            <p className="mt-2">
              Les données personnelles collectées sont réservées à l'usage exclusif des collaborateurs internes dûment habilités au sein du GIGET (secrétariat, chargés d'affaires). <br /><br />
              Nous certifions que vos données ne sont ni vendues, ni louées, ni cédées à aucun tiers à des fins commerciales. Le site étant hébergé via Vercel, les flux s'effectuent sur des serveurs hautement sécurisés, toutes les transmissions bénéficiant du protocole HTTPS garantissant le chiffrement de bout en bout.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              5. Durée de conservation
            </h2>
            <p className="mt-2">
              Les données personnelles ne sont conservées que le temps nécessaire à l'accomplissement de l'objectif poursuivi.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Demandes d'information : suppression 3 ans après l'ultime contact émanant de l'utilisateur.</li>
              <li>Données contractuelles (Adhérents) : conservées toute la durée du contrat, puis archivées temporairement pour répondre aux obligations légales (durées de prescription légale ou obligations comptables).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              6. Sécurité des Données
            </h2>
            <p className="mt-2">
              Le GIGET déploie des mesures techniques et organisationnelles appropriées afin de préserver de manière permanente la sécurité, l'intégrité et la confidentialité de vos informations, et notamment d'empêcher qu'elles ne soient déformées, endommagées, ou que des tiers non autorisés y aient accès.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              7. Vos droits (Informatique et Libertés)
            </h2>
            <p className="mt-2">
              En l'application immédiate de la réglementation RGPD, vous disposez d'un panel de droits imprescriptibles sur vos données :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Le droit d'accès</strong> : pour savoir quelles données nous possédons sur vous.</li>
              <li><strong>Le droit de rectification et de modification</strong> : pour mettre à jour ou corriger vos données.</li>
              <li><strong>Le droit à l'effacement (droit à l'oubli)</strong> : applicable sous certaines conditions légales.</li>
              <li><strong>Le droit à la limitation et d'opposition au traitement</strong> : pour geler l'utilisation de vos données dans des cas précis.</li>
              <li><strong>Le droit à la portabilité de vos données.</strong></li>
            </ul>
            <p className="mt-4">
              Pour initier toute demande, nous vous invitons à nous contacter par e-mail à l'adresse <a href="mailto:contact@giget.fr" className="text-giget-red font-semibold hover:underline">contact@giget.fr</a> ou par voie postale : GIGET, <a href="https://maps.google.com/?q=97+Avenue+de+la+Corse,+13007+Marseille" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-slate-100 text-giget-blue px-2 py-0.5 rounded-md text-sm font-medium hover:bg-giget-red hover:text-white transition-colors border border-slate-200 shadow-sm mx-1"> 97 Avenue de la Corse, 13007 Marseille</a>.<br /> Vous pouvez également adresser une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (<strong>CNIL</strong>), sise 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07 (www.cnil.fr).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              8. Politique relative aux Traceurs (Cookies)
            </h2>
            <p className="mt-2">
              La navigation sur ce site ne déclenche spontanément le dépôt d'<strong>aucun cookie externe de mesure d'audience ou de traçage publicitaire intrusif</strong>.<br /> Seuls des cookies dits « techniques » ou « strictement nécessaires », exemptés de recueil de consentement tel que le stipulent les instructions de la CNIL, peuvent être appliqués pour le chargement adéquat du site web. Aucune action de requalification tierce de vote profil numérique n'a lieu sur ce portail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
