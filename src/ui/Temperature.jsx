function Temperature({ value, unit = '°C', size = 'xl', font = 'normal' }) {
  return (
    <span
      className={`flex items-start justify-start text-${size} font-${font} w-fit`}
    >
      <span className='leading-none text-neutral-100'>{value.toFixed(1)}</span>
      <span className='text-[0.8em] font-normal leading-none text-neutral-300'>
        {unit}
      </span>
    </span>
  );
}

export default Temperature;
