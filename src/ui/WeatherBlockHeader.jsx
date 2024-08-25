function WeatherBlockHeader({ children, className }) {
  return (
    <div
      className={
        'flex items-center self-start text-sm text-neutral-400 semi-sm:text-base' +
        ' ' +
        className
      }
    >
      {children}
    </div>
  );
}

export default WeatherBlockHeader;
