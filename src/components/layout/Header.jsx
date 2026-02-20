import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/organisation", label: "L'Association" },
    { to: "/ascenseurs", label: "Pôle Ascenseurs" },
    { to: "/plomberie", label: "Pôle Plomberie (Viae Domo)" },
    { to: "/contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 ${location.pathname === "/" ? "transition-all duration-700" : "transition-[padding,box-shadow] duration-300"} ${scrolled || location.pathname !== "/" || mobileMenuOpen
          ? "py-3 glass-panel bg-white/95 shadow-sm"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <Link
            to="/"
            onClick={handleNavClick}
            className="z-50 relative flex-shrink-0"
          >
            <img
              src="/GIGET_LOGO.png"
              alt="GIGET Logo"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-grow justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={`text-xs font-medium uppercase tracking-widest hover:text-giget-red transition-all duration-300 relative group ${isActive(link.to) ? "text-giget-red" : "text-giget-blue"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[1px] bg-giget-red transition-all duration-300 ${isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block flex-shrink-0">
            <button className="group relative bg-giget-red text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3 hover:bg-[#600018] transition-all duration-300 shadow-md flex items-center overflow-hidden">
              <span className="transition-transform duration-300 group-hover:-translate-x-5">
                Accéder à mon espace personnel
              </span>
              <span className="absolute right-5 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <ArrowRightIcon className="w-5 h-5 text-white stroke-2" />
              </span>
            </button>
          </div>

          <button
            className="lg:hidden text-giget-blue z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-8 h-0.5 bg-giget-blue transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-giget-blue transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-giget-blue transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-start pt-32 md:pt-40 items-center h-[100dvh] w-screen overflow-hidden overscroll-none ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col gap-8 text-center px-6 w-full max-w-md">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleNavClick}
              className={`text-2xl font-serif font-bold ${isActive(link.to) ? "text-giget-red" : "text-giget-blue"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8 flex justify-center w-full">
            <button className="group relative bg-giget-red text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#600018] transition-colors duration-300 shadow-md flex items-center gap-2 justify-center w-full max-w-xs">
              <span>Accéder à mon espace personnel</span>
              <ArrowRightIcon className="w-5 h-5 text-white stroke-2" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
