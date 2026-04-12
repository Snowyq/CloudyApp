import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeDiacritics } from '../../utils/helpers';

function SearchResultsItem({ result }) {
  const navigate = useNavigate();
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

  return (
    <div
      className='mx-1 cursor-pointer rounded py-2 pl-4 text-lg text-neutral-200 hover:bg-neutral-800'
      onMouseDown={() => {
        navigate(`app/weather/current/${result.id}`);
      }}
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
