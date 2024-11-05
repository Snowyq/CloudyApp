import { useEffect, useRef, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import SearchResults from './SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults, hideResults } from './searchSlice';
import { useNavigate } from 'react-router-dom';

function SearchLocation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const { results, showResults } = useSelector(state => state.search);

  const [query, setQuery] = useState('');

  const isResults = results && showResults;
  useEffect(() => {
    if (query.length >= 3) {
      dispatch(fetchResults(query));
    } else {
      dispatch(hideResults());
    }
  }, [query, dispatch]);

  function handleSearchSubmit(e) {
    e.preventDefault();

    if (!results) return;
    // const [locationType, locationId] = results[0].id.split('.');
    // console.log(locationType, locationId);
    // navigate(`app/weather/current/${locationType}/${locationId}`);
    navigate(`app/weather/current/${results[0].id}`);
    // dispatch(
    //   fetchWeather({
    //     position: {
    //       lon: results[0].center[0],
    //       lat: results[0].center[1],
    //     },
    //     placeName: results[0].place_name,
    //     id: results[0].id,
    //   }),
    // );
    dispatch(hideResults());
    setQuery('');
    if (inputRef.current) inputRef.current.blur();
  }

  function handleSearchBlur() {
    dispatch(hideResults());
    setQuery('');
  }

  return (
    <div className='relative z-[1000] flex flex-col transition-all'>
      <form
        onSubmit={handleSearchSubmit}
        className='z-30 flex w-40 items-center rounded-full border-2 border-neutral-700 bg-neutral-800 pl-2 transition-all has-[:focus]:w-60 has-[:focus]:scale-105 sm:w-52 sm:has-[:focus]:w-72 md:w-60 md:has-[:focus]:w-96 lg:w-72 xl:w-96'
      >
        <PiMagnifyingGlass className='z-10 text-neutral-300' />
        <input
          ref={inputRef}
          onChange={e => setQuery(e.target.value)}
          value={query}
          onBlur={handleSearchBlur}
          className='z-20 w-full bg-transparent px-2 py-1 focus:border-none focus:outline-none'
          type='text'
          placeholder='search location'
        />
      </form>
      {/* {isLoading && <SearchLoading />} */}
      {isResults && <SearchResults />}
    </div>
  );
}

export default SearchLocation;
