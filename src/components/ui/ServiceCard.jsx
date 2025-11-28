const ServiceCard = ({ number, label, title, description }) => (
  <div className="bg-slate-50 p-10 border border-slate-100 hover:border-giget-red transition-colors group">
    <div className="text-giget-red font-bold text-xl mb-4 group-hover:translate-x-2 transition-transform">
      {number}. {label}
    </div>
    <h3 className="text-2xl font-serif text-giget-blue mb-4">{title}</h3>
    <p className="text-slate-600 mb-6">{description}</p>
  </div>
);

export default ServiceCard;
