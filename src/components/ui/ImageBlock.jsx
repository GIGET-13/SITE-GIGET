const ImageBlock = ({ src, alt, className = "h-[400px]" }) => (
  <div
    className={`relative ${className} rounded-lg overflow-hidden shadow-2xl`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export default ImageBlock;
