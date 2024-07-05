function WeatherBlock({ children, onClick, className = '' }) {
  return (
    <div
      className={`relative rounded-lg bg-neutral-700 p-3 text-neutral-300 transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default WeatherBlock;
