const Legal = () => {
  return (
    <section className="bg-white min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-giget-blue mb-12">
          Mentions Légales
        </h1>

        <div className="space-y-12 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              1. Éditeur du site
            </h2>
            <p className="mt-4">
              Le site internet <strong>GIGET</strong> est édité par :
              <br />
              <strong>
                GIGET (Groupement des Indépendants en Gestion d'Équipements
                Techniques)
              </strong>
              <br />
              Association régie par la loi du 1er juillet 1901
              <br />
              Siège social : 97 Avenue de la Corse, 13007 Marseille, France.
              <br />
              Téléphone : +33 4 91 00 00 00
              <br />
              Email : contact@giget-marseille.fr
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              2. Directeur de la publication
            </h2>
            <p className="mt-4">
              Le Directeur de la publication est le Président du Conseil
              d'Administration du GIGET.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              3. Hébergement
            </h2>
            <p className="mt-4">
              Le site est hébergé par une infrastructure cloud sécurisée
              conforme aux normes en vigueur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              4. Propriété Intellectuelle
            </h2>
            <p className="mt-4">
              L'ensemble de ce site relève de la législation française et
              internationale sur le droit d'auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés, y
              compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques. La reproduction de tout ou
              partie de ce site sur un support électronique quel qu'il soit est
              formellement interdite sauf autorisation expresse du directeur de
              la publication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              5. Responsabilité
            </h2>
            <p className="mt-4">
              Les informations communiquées sur le site du GIGET sont fournies à
              titre indicatif, elles sont non contractuelles et ne sauraient
              engager la responsabilité de l'éditeur. Le GIGET se réserve le
              droit de modifier le contenu du site à tout moment et sans
              préavis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
