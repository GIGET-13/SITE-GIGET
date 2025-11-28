import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-giget-blue border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} GIGET. Tous droits réservés.
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link
              to="/mentions-legales"
              className="hover:text-giget-blue transition-colors font-medium"
            >
              Mentions Légales
            </Link>
            <Link
              to="/confidentialite"
              className="hover:text-giget-blue transition-colors font-medium"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
