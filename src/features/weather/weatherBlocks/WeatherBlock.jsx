function WeatherBlock({ children, onClick, className = '' }) {
  return (
    <div
      className={`relative rounded-lg bg-neutral-700 px-2 py-1.5 text-neutral-300 transition-all ${className} transition-all hover:scale-[1.02]`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default WeatherBlock;
