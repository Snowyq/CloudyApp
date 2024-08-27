function WeatherBlock({ children, onClick, className = '' }) {
  return (
    <div
      className={`relative rounded-lg bg-neutral-700 px-1 py-0.5 text-neutral-300 transition-all ${className} transition-all`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default WeatherBlock;
