import { useEffect, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import SearchResults from './SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults, removeResults } from './searchSlice';

function SearchLocation() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { results } = useSelector(state => state.search);
  // const isLoading = status === 'loading';

  useEffect(() => {
    if (query.length >= 3) {
      dispatch(fetchResults(query));
    } else {
      dispatch(removeResults());
    }
  }, [query, dispatch]);

  const handleInputBlur = e => {};

  return (
    <div
      onBlur={handleInputBlur}
      className='relative flex flex-col transition-all'
    >
      <div className='flex w-40 items-center rounded-full border border-neutral-700 bg-neutral-800 pl-2 transition-all has-[:focus]:w-96 sm:w-52 md:w-60 lg:w-72 xl:w-96'>
        <PiMagnifyingGlass className='text-neutral-300' />
        <input
          onChange={e => setQuery(e.target.value)}
          className='w-full bg-transparent px-2 py-1 focus:border-none focus:outline-none'
          type='text'
          placeholder='search location'
        />
      </div>
      {results && <SearchResults />}
    </div>
  );
}

export default SearchLocation;
