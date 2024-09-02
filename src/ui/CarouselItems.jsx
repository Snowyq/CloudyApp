import AbsoluteCenter from './AbsoluteCenter';

function CarouselItems({ children, className, style, CarouselItemWidth }) {
  return (
    <div className={`w-full ${className}`} style={style}>
      {children.map((child, index) => (
        <div key={index} style={{ width: CarouselItemWidth + '%' }}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default CarouselItems;
