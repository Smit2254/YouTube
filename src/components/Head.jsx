import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

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

      <div className='flex justify-center gap-3 col-span-10'>
        <div className='flex border border-gray-500 rounded-full overflow-hidden w-full max-w-xl'>
          <input type='text' placeholder='Search' className='px-4 py-2 w-full outline-none' />
          <button className='bg-gray-300 px-4 flex items-center justify-center hover:bg-gray-200 cursor-pointer'>
            <ion-icon size='small' name='search-outline'></ion-icon>
          </button>
        </div>
        <button className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <ion-icon size='large' name='mic-outline'></ion-icon>
        </button>
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
