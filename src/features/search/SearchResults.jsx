import SearchResultsItem from './SearchResultsItem';

function SearchResults({
  results,
  activeIndex,
  onSelect,
  onActiveIndexChange,
}) {
  return (
    <div
      className='absolute z-10 mt-5 w-full rounded-b-2xl border border-neutral-900 bg-neutral-900 pb-1 pt-5 opacity-[0.99]'
      role='listbox'
      aria-label='Search results'
    >
      {results.map((result, index) => (
        <SearchResultsItem
          result={result}
          index={index}
          isActive={index === activeIndex}
          onSelect={onSelect}
          onActiveIndexChange={onActiveIndexChange}
          key={result.id}
        />
      ))}
    </div>
  );
}

export default SearchResults;
