function AppStart() {
  return (
    <section className='flex min-h-[calc(100svh-50px)] flex-col items-center justify-center gap-4 px-6 pt-16 text-center'>
      <div className='max-w-xl'>
        <p className='text-xs uppercase tracking-[0.3em] text-neutral-400'>
          WeatherApp
        </p>
        <h1 className='mt-2 text-3xl font-semibold sm:text-4xl'>
          Weather App in React
        </h1>
        <p className='mt-3 text-sm text-neutral-300'>
          Use the search bar above to find a location. 
        </p>
      </div>
   
    </section>
  );
}

export default AppStart;
