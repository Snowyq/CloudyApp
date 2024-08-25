import { useEffect, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import SearchResults from './SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults, hideResults } from './searchSlice';
import { fetchWeather } from '../weather/weatherSlice';
import SearchLoading from '../../ui/SearchLoading';

function SearchLocation() {
  const dispatch = useDispatch();
  const { results, status, showResults } = useSelector(state => state.search);
  const isResults = results && showResults;
  const isLoading = status === 'loading';

  const [query, setQuery] = useState('');

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
    dispatch(
      fetchWeather({
        lon: results[0].center[0],
        lat: results[0].center[1],
        place: results[0].place_name,
      }),
    );
    dispatch(hideResults());
    setQuery('');
  }

  function handleSearchBlur() {
    dispatch(hideResults());
    setQuery('');
  }

  return (
    <div className='relative z-[1000] flex flex-col transition-all'>
      <form
        onSubmit={handleSearchSubmit}
        className='z-30 flex w-40 items-center rounded-full border border-neutral-700 bg-neutral-800 pl-2 transition-all has-[:focus]:w-96 sm:w-52 md:w-60 lg:w-72 xl:w-96'
      >
        <PiMagnifyingGlass className='z-10 text-neutral-300' />
        <input
          onChange={e => setQuery(e.target.value)}
          value={query}
          onBlur={handleSearchBlur}
          className='z-20 w-full bg-transparent px-2 py-1 focus:border-none focus:outline-none'
          type='text'
          placeholder='search location'
        />
      </form>
      {isLoading && <SearchLoading />}
      {isResults && <SearchResults />}
    </div>
  );
}

export default SearchLocation;
