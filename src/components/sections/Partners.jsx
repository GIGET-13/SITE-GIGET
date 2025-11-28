const partners = [
  "ERILIA",
  "LOGIREM",
  "UNICIL",
  "HABITAT MARSEILLE PROVENCE",
  "PAYS D'AIX HABITAT",
  "13 HABITAT",
  "FAMILLE & PROVENCE",
  "SOGIMA",
];

const Partners = () => {
  return (
    <div className="w-full bg-giget-blue py-8 overflow-hidden border-y border-white/10 relative z-20 group">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <span className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase">
          Nos Adhérents & Partenaires
        </span>
      </div>
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {partners.map((partner, index) => (
            <span
              key={index}
              className="text-xl md:text-2xl font-serif text-white/80 font-bold uppercase mx-4 opacity-50 hover:opacity-100 transition-opacity cursor-default"
            >
              {partner}
            </span>
          ))}
          {partners.map((partner, index) => (
            <span
              key={`dup-${index}`}
              className="text-xl md:text-2xl font-serif text-white/80 font-bold uppercase mx-4 opacity-50 hover:opacity-100 transition-opacity cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Partners;
