const buttonStyles = {
  // styles must be created based on 'em' value because of modular and responsive design of button
  default: '',
};

function Button({ children, onClick, type, size, className = '' }) {
  const style = type ? buttonStyles[type] : className;
  const buttonSize = size ? `text-${size}` : '';
  return (
    <button className={buttonSize + style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
