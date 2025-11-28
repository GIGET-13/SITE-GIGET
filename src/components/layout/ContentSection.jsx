const ContentSection = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 py-20 ${className}`}>{children}</div>
);

export default ContentSection;
