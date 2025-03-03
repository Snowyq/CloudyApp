import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import Button from './Button';

function SideButtons({ onRightArrowClick, onLeftArrowClick }) {
  const buttonStyle = `relative rounded-full py-1 text-neutral-500 transition-all after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-[1.5em] after:w-[1.5em] after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:transition-all hover:scale-110 hover:text-neutral-300 hover:after:scale-100 hover:after:bg-neutral-500 hover:shadow-md hover:shadow-neutral-800 pointer-events-auto`;

  return (
    <div className='pointer-events-none absolute left-0 top-1/2 z-50 flex w-full -translate-y-1/2 justify-between'>
      <Button className={buttonStyle + ' pr-1'} onClick={onLeftArrowClick}>
        <MdOutlineArrowBackIosNew />
      </Button>
      <Button className={buttonStyle + ' pl-1'} onClick={onRightArrowClick}>
        <MdOutlineArrowForwardIos />
      </Button>
    </div>
  );
}

export default SideButtons;
