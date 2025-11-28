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
              Le GIGET s'engage à ce que la collecte et le traitement de vos
              données, effectués à partir du site giget-marseille.fr, soient
              conformes au règlement général sur la protection des données
              (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              1. Collecte des données
            </h2>
            <p className="mt-2">
              Nous collectons uniquement les données strictement nécessaires au
              traitement de votre demande via le formulaire de contact :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nom et Prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Message</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              2. Finalité des données
            </h2>
            <p className="mt-2">
              Les informations recueillies font l'objet d'un traitement
              informatique destiné à :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Répondre aux demandes d'information ou de devis.</li>
              <li>Gérer la relation avec nos adhérents et partenaires.</li>
            </ul>
            <p className="mt-4">
              Ces données ne sont jamais commercialisées ni transmises à des
              tiers non autorisés.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              3. Durée de conservation
            </h2>
            <p className="mt-2">
              Vos données personnelles sont conservées pendant une durée qui
              n'excède pas la durée nécessaire aux finalités pour lesquelles
              elles sont collectées et traitées, conformément à la
              réglementation en vigueur (généralement 3 ans après le dernier
              contact).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              4. Vos droits
            </h2>
            <p className="mt-2">
              Vous disposez des droits suivants concernant vos données
              personnelles :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Droit d'accès et de rectification.</li>
              <li>Droit à l'effacement (droit à l'oubli).</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit d'opposition.</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse
              suivante : <strong>contact@giget-marseille.fr</strong> ou par
              courrier postal au 97 Avenue de la Corse, 13007 Marseille.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm">
              5. Cookies
            </h2>
            <p className="mt-2">
              Ce site utilise des cookies techniques nécessaires à son bon
              fonctionnement. Aucune donnée de traçage publicitaire n'est
              collectée sans votre consentement explicite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
