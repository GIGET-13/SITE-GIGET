const SectionTitle = ({ title, centered = true }) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <div
      className={`w-16 h-1 bg-giget-red mb-4 ${centered ? "mx-auto" : ""}`}
    ></div>
    <h2 className="text-3xl font-serif text-giget-blue">{title}</h2>
  </div>
);

export default SectionTitle;
