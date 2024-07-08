import { useEffect, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { SearchCityByName } from '../services/apiGeocoding';

function SearchLocation() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function search() {
      if (query.length < 3) return;
      try {
        const data = await SearchCityByName(query);
        console.log(data);
      } catch (err) {
        setError(err.message);
        throw new Error(err);
      }
    }
    search();
  }, [query]);

  return (
    <div className='flex items-center rounded-full border border-neutral-700 pl-2'>
      <PiMagnifyingGlass className='text-neutral-300' />
      <input
        onChange={e => setQuery(e.target.value)}
        className='w-80 bg-inherit px-4 py-1'
        type='text'
        placeholder='search location'
      />
      <div></div>
    </div>
  );
}

export default SearchLocation;
