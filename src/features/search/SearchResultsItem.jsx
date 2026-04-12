import { useSelector } from 'react-redux';
import { removeDiacritics } from '../../utils/helpers';

function SearchResultsItem({
  result,
  index,
  isActive,
  onSelect,
  onActiveIndexChange,
}) {
  const query = useSelector(state => state.search.query);

  const [name, ...nameRest] = result.place_name.split(',');
  const normalizedQuery = removeDiacritics(query);
  const normalizedName = removeDiacritics(name);
  const indexOfMatch = normalizedName
    .toLowerCase()
    .indexOf(normalizedQuery.toLowerCase());
  const match =
    indexOfMatch >= 0
      ? name.slice(indexOfMatch, indexOfMatch + query.length)
      : '';
  const [firstNamePart, secondNamePart] = name.replace(match, ',').split(',');

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextItem = e.currentTarget.nextElementSibling;
      if (nextItem) nextItem.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevItem = e.currentTarget.previousElementSibling;
      if (prevItem) prevItem.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(result);
    }
  }

  return (
    <div
      className={`mx-1 cursor-pointer rounded py-2 pl-4 text-lg text-neutral-200 hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none ${
        isActive ? 'bg-neutral-800 text-neutral-50' : ''
      }`}
      role='option'
      aria-selected={isActive}
      tabIndex={0}
      data-index={index}
      onFocus={() => onActiveIndexChange(index)}
      onMouseEnter={() => onActiveIndexChange(index)}
      onKeyDown={handleKeyDown}
      onMouseDown={() => onSelect(result)}
    >
      <span>{firstNamePart}</span>
      <span className='font-semibold text-neutral-50'>{match}</span>
      <span>{secondNamePart}</span>
      {nameRest?.join(',') && (
        <span className='text-sm text-neutral-400'>, {nameRest.join(',')}</span>
      )}
    </div>
  );
}

export default SearchResultsItem;
