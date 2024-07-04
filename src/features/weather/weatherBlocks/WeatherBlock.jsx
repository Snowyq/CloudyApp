function WeatherBlock({ children, onClick, className = '' }) {
  return (
    <div
      className={`relative rounded-lg bg-neutral-700 transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default WeatherBlock;
