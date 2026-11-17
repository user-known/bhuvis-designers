export default function Photo({ src, alt, className = "", eager = false }) {
  return (
    <div className={`ph ${className}`.trim()}>
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" fetchPriority={eager ? "high" : undefined} />
    </div>
  );
}
