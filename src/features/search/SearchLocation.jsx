import { useEffect, useRef, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults';
import { fetchResults, hideResults } from './searchSlice';

function SearchLocation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { results, showResults } = useSelector(state => state.search);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const resultsCount = results?.length ?? 0;
  const isResults = resultsCount > 0 && showResults;

  useEffect(() => {
    if (query.length >= 3) {
      dispatch(fetchResults(query));
    } else {
      dispatch(hideResults());
    }
  }, [query, dispatch]);

  useEffect(() => {
    if (!isResults) {
      if (activeIndex !== -1) setActiveIndex(-1);
      return;
    }
    if (activeIndex >= resultsCount) {
      setActiveIndex(resultsCount - 1);
    }
  }, [isResults, activeIndex, resultsCount]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!resultsCount) return;
    const selectedIndex = activeIndex >= 0 ? activeIndex : 0;
    handleSelectResult(results[selectedIndex]);
  }

  function handleSelectResult(result) {
    if (!result) return;
    navigate(`app/weather/current/${result.id}`);
    dispatch(hideResults());
    setQuery('');
    setActiveIndex(-1);
    if (inputRef.current) inputRef.current.blur();
  }

  function handleContainerBlur(e) {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    dispatch(hideResults());
    setQuery('');
    setActiveIndex(-1);
  }

  function handleInputKeyDown(e) {
    if (!isResults) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev =>
        prev < 0 ? 0 : Math.min(prev + 1, resultsCount - 1),
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev =>
        prev < 0 ? resultsCount - 1 : Math.max(prev - 1, 0),
      );
    }
  }

  return (
    <div
      className='relative z-[1000] flex flex-col transition-all'
      onBlur={handleContainerBlur}
    >
      <form
        onSubmit={handleSearchSubmit}
        className='z-30 flex w-40 items-center rounded-full border-2 border-neutral-700 bg-neutral-800 pl-2 transition-all has-[:focus]:w-60 has-[:focus]:scale-105 sm:w-52 sm:has-[:focus]:w-72 md:w-60 md:has-[:focus]:w-96 lg:w-72 xl:w-96'
      >
        <PiMagnifyingGlass className='z-10 text-neutral-300' />
        <input
          ref={inputRef}
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyDown={handleInputKeyDown}
          className='z-20 w-full bg-transparent px-2 py-1 focus:border-none focus:outline-none'
          type='text'
          placeholder='search location'
        />
      </form>
      {isResults && (
        <SearchResults
          results={results}
          activeIndex={activeIndex}
          onSelect={handleSelectResult}
          onActiveIndexChange={setActiveIndex}
        />
      )}
    </div>
  );
}

export default SearchLocation;
