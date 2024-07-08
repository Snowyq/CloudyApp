import { useEffect, useState } from 'react';

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='m-1 flex flex-col items-center text-neutral-300'>
      <p className='text-lg text-neutral-400'>
        {new Date().toLocaleDateString()}
      </p>
      <p className='w-32 text-center font-mono text-lg'>
        {time.toLocaleTimeString([], {
          minute: '2-digit',
          hour: '2-digit',
          // second: '2-digit',
        })}
      </p>
    </div>
  );
}

export default Time;
