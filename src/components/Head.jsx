import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col items-center p-3 m-2'>
      <div className='flex col-span-1 gap-5'>
        <button className='cursor-pointer' onClick={toggleMenuHandler}>
          <ion-icon size='large' name='menu-outline'></ion-icon>
        </button>
        <img
          className='h-8 cursor-pointer'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png'
          alt='YouTube Logo'
        />
      </div>

      <div>
        <div className='flex justify-center gap-3 col-span-10'>
          <div className='flex border border-gray-500 rounded-full overflow-hidden w-full max-w-xl'>
            <input
              type='text'
              placeholder='Search'
              className='px-4 py-2 w-full outline-none'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className='bg-gray-300 px-4 flex items-center justify-center hover:bg-gray-200 cursor-pointer'>
              <ion-icon size='small' name='search-outline'></ion-icon>
            </button>
          </div>
          <button className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <ion-icon size='large' name='mic-outline'></ion-icon>
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div>
            <ul className='fixed mx-4 my-2 py-2 px-4 bg-white w-full max-w-lg rounded-lg shadow-lg border border-gray-100'>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className='hover:bg-gray-100 flex gap-3 items-center rounded-lg p-2 m-2'>
                  <ion-icon size='small' name='search-outline'></ion-icon>
                  <span className='text-sm text-gray-800'>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='flex items-center justify-end gap-4 col-span-1'>
        {/* Create Button */}
        <button className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <ion-icon size='large' name='videocam-outline'></ion-icon>
        </button>

        {/* Notifications */}
        <button className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <ion-icon size='large' name='notifications-outline'></ion-icon>
        </button>

        {/* User Avatar */}
        <button className='p-1 rounded-full hover:bg-gray-200 cursor-pointer'>
          <ion-icon size='large' name='person-circle-outline'></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Head;
