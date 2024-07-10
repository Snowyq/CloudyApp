import { useEffect, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import SearchResults from './SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults, hideResults, removeResults } from './searchSlice';
import { useDetectClickOutside } from 'react-detect-click-outside';

function SearchLocation() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { results, showResults } = useSelector(state => state.search);
  // const isLoading = status === 'loading';
  // const ref = useDetectClickOutside({ onTriggered: handleShowResults });
  const isResults = results && showResults;

  // function handleShowResults() {
  //   console.log('dupa');
  //   dispatch(hideResults());
  // }

  useEffect(() => {
    if (query.length >= 3) {
      dispatch(fetchResults(query));
    } else {
      dispatch(hideResults());
    }
  }, [query, dispatch]);

  return (
    <div className='relative flex flex-col transition-all'>
      <div className='flex w-40 items-center rounded-full border border-neutral-700 bg-neutral-800 pl-2 transition-all has-[:focus]:w-96 sm:w-52 md:w-60 lg:w-72 xl:w-96'>
        <PiMagnifyingGlass className='text-neutral-300' />
        <input
          onChange={e => setQuery(e.target.value)}
          value={query}
          onBlur={() => {
            dispatch(hideResults());
            setQuery('');
          }}
          className='w-full bg-transparent px-2 py-1 focus:border-none focus:outline-none'
          type='text'
          placeholder='search location'
        />
      </div>
      {isResults && <SearchResults />}
    </div>
  );
}

export default SearchLocation;
