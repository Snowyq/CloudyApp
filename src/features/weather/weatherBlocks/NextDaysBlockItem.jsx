function NextDaysBlockItem({ day }) {
  console.log(day);

  return (
    <div className='flex flex-col items-center'>
      <p>
        {new Date(day.dt * 1000).toLocaleDateString('pl-PL', {
          day: 'numeric',
          month: 'numeric',
        })}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt=''
      />
      <p>{day.temp.day.toFixed(1)}</p>
    </div>
  );
}

export default NextDaysBlockItem;
