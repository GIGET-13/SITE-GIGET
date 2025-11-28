const TwoColumnGrid = ({ children, className = "" }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${className}`}
  >
    {children}
  </div>
);

export default TwoColumnGrid;
