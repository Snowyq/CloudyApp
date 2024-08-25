function ValueDisplay({
  value,
  valueFont = 'normal',
  valueUnitSpace = '0',
  valueColor = 'neutral-100',
  size = 'xl',
  unit = '°',
  unitColor = valueColor,
  unitFont = valueFont,
  textBefore = '',
  textAfter = '',
  textFont = 'normal',
  textColor = 'neutral-400',
  fixed = '1',
  noValue = '',
  className = '',
  type = '',
}) {
  const isValue = value || value == 0;

  let mainStyle;
  let valueStyle;
  let unitStyle;

  switch (type) {
    case 'primary':
      mainStyle = `flex items-end justify-start text-2xl font-semibold w-fit text-${textColor} ${className}`;
      valueStyle = `text-${valueColor} font-${valueFont}`;
      unitStyle = `ml-${valueUnitSpace} text-${unitColor} font-${unitFont}`;
      break;
    default:
      mainStyle = `flex items-end justify-start text-${size} font-${textFont} w-fit text-${textColor} ${className}`;
      valueStyle = `text-${valueColor} font-${valueFont}`;
      unitStyle = `ml-${valueUnitSpace} text-${unitColor} font-${unitFont}`;
  }

  if (!isValue) return <span>no Value</span>;

  return (
    <span className={mainStyle}>
      {textBefore && <span className='mr-1'>{textBefore}</span>}

      <span className={valueStyle}>{parseFloat(value.toFixed(fixed))}</span>
      <span className={unitStyle}>{unit}</span>

      {textAfter && <span className='ml-1'>{textAfter}</span>}
    </span>
  );
}

export default ValueDisplay;
