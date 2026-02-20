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
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <p className="mt-4">
              <strong>Propriétaire et Éditeur du site :</strong><br />
              <strong>GIGET (Groupement des Indépendants en Gestion d'Équipements Techniques)</strong><br />
              Association déclarée, régie par la loi du 1er juillet 1901 et le décret du 16 août 1901.<br />
              Siège social : <a href="https://maps.google.com/?q=97+Avenue+de+la+Corse,+13007+Marseille" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-slate-100 text-giget-blue px-2 py-0.5 rounded-md text-sm font-medium hover:bg-giget-red hover:text-white transition-colors border border-slate-200 shadow-sm mx-1"> 97 Avenue de la Corse, 13007 Marseille, France</a>.<br />
              SIRET : [Numéro de SIRET du GIGET à compléter]<br />
              Numéro RNA : [Numéro RNA à compléter]<br />
              Téléphone : +33 4 91 00 00 00<br />
              Email de contact officiel : <a href="mailto:contact@giget.fr" className="text-giget-red font-semibold hover:underline">contact@giget.fr</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              2. Directeur de la publication
            </h2>
            <p className="mt-4">
              Le Directeur de la publication est le/la Président(e) du Conseil d'Administration du GIGET, agissant en qualité de représentant légal de l'association.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              3. Hébergement
            </h2>
            <p className="mt-4">
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" className="text-giget-red hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a><br /><br />
              Les données transitant par l'infrastructure cloud bénéficient des certificats de sécurité et du chiffrement requis par la réglementation européenne (RGPD).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              4. Propriété Intellectuelle et Contrefaçons
            </h2>
            <p className="mt-4">
              Le GIGET est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logos, icônes, sons ou logiciels.
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite, sauf autorisation écrite préalable exigée par l'article L.122-4 du Code de la Propriété Intellectuelle.
              <br /><br />
              Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              5. Limitations de Responsabilité
            </h2>
            <p className="mt-4">
              Le GIGET s'efforce de fournir sur son site des informations aussi précises que possible. Toutefois, l'association ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              Par ailleurs, le GIGET décline toute responsabilité quant aux éventuels dysfonctionnements techniques, virus ou autres problèmes liés au réseau internet pouvant endommager le matériel informatique de l'utilisateur. Le téléchargement de données se fait aux risques et périls de l'utilisateur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              6. Droit applicable et attribution de juridiction
            </h2>
            <p className="mt-4">
              Tout litige en relation avec l'utilisation du site est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Marseille. En cas de différend, l'utilisateur est encouragé à s'adresser en priorité à l'association pour rechercher une solution amiable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-giget-blue mb-4 uppercase tracking-widest text-sm border-b border-giget-red pb-2 inline-block">
              7. Liens Hypertextes
            </h2>
            <p className="mt-4">
              Le site peut contenir des liens hypertextes vers d'autres sites. Néanmoins, le GIGET n'a pas la possibilité de vérifier le contenu de ces sites et n'assumera en conséquence aucune responsabilité de ce fait. La navigation sur ces sites externes relève de la seule responsabilité de l'utilisateur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
