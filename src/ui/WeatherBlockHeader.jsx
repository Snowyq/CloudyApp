function WeatherBlockHeader({ children, className }) {
  return (
    <div className={'flex self-start text-neutral-400' + ' ' + className}>
      {children}
    </div>
  );
}

export default WeatherBlockHeader;
