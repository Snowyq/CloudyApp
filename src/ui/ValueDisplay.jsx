function ValueDisplay({
  value,
  valueFont = 'normal',
  valueUnitSpace = '0',
  valueLeading = '[1.1]',
  valueColor = 'neutral-100',
  size = 'xl',
  unit = '°C',
  unitSize = '[0.8em]',
  unitAlign = 'start',
  textBefore = '',
  textAfter = '',
  textFont = 'normal',
  textColor = 'neutral-400',
  fixed = '1',
}) {
  const isValue = value || value == 0;

  return (
    <span
      className={`flex items-end justify-start text-${size} font-${textFont} w-fit text-${textColor} `}
    >
      {textBefore && (
        <span className='mr-1 text-[0.8em] leading-tight'>{textBefore}</span>
      )}
      {isValue ? (
        <span
          className={`leading-${valueLeading} text-${valueColor} font-${valueFont} align-bottom`}
        >
          {parseFloat(value.toFixed(fixed))}
        </span>
      ) : (
        <span>no Value</span>
      )}
      <span
        className={`leading-tight text-${unitSize} ml-${valueUnitSpace} self-${unitAlign} `}
      >
        {unit}
      </span>
      {textAfter && (
        <span className='ml-1 text-[0.8em] leading-tight'>{textAfter}</span>
      )}
    </span>
  );
}

export default ValueDisplay;
