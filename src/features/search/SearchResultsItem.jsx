import { fetchWeather } from '../weather/weatherSlice';
import { removeDiacritics } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';

function SearchResultsItem({ result }) {
  const dispatch = useDispatch();
  const query = useSelector(state => state.search.query);

  // breaking place_name to make better UI
  const [name, ...nameRest] = result.place_name.split(',');

  // finding query string in name string to distinguish query given by user

  // removing local special characters to make comparing more user friendly
  const normalizedQuery = removeDiacritics(query);
  const normalizedName = removeDiacritics(name);
  // finding position of query in name
  const indexOfMatch = normalizedName
    .toLowerCase()
    .indexOf(normalizedQuery.toLowerCase());
  //getting match string (it cant be query because it is desire to keep corectly written name)

  const match =
    indexOfMatch >= 0
      ? name.slice(indexOfMatch, indexOfMatch + query.length)
      : '';
  // spliting name end removing match from place wherever it is
  const [firstNamePart, secondNamePart] = name.replace(match, ',').split(',');

  return (
    <div
      className='mx-1 cursor-pointer rounded py-2 pl-4 text-lg text-neutral-200 hover:bg-neutral-800'
      onMouseDown={() => {
        dispatch(
          fetchWeather({
            lon: result.center[0],
            lat: result.center[1],
            place: result.place_name,
          }),
        );
        // dispatch(hideResults());
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
