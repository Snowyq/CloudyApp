import { useSelector } from 'react-redux';
import SearchResultsItem from './SearchResultsItem';

function SearchResults() {
  const results = useSelector(state => state.search.results);
  console.log(results);

  return (
    <div className='absolute -z-10 mt-5 w-full rounded-b-2xl border border-neutral-900 bg-neutral-900 pb-1 pt-5'>
      {results &&
        results.map(result => (
          <SearchResultsItem result={result} key={result.id} />
        ))}
    </div>
  );
}

export default SearchResults;

// absolute -z-10 rounded-2xl bg-neutral-700 px-4 pt-10
