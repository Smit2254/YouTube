import { useSelector } from 'react-redux';
import SidebarItem from './SidebarItems';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? 'w-60' : 'w-25'
      } px-2 h-screen overflow-y-auto hide-scrollbar transition-all duration-300`}
    >
      <div className='py-2'>
        <Link to='/'>
          <SidebarItem icon='home' label='Home' active collapsed={!isMenuOpen} />
        </Link>
        <SidebarItem icon='flash' label='Shorts' collapsed={!isMenuOpen} />
        <SidebarItem icon='albums' label='Subscriptions' collapsed={!isMenuOpen} />
        <SidebarItem icon='play-circle' label='Music' collapsed={!isMenuOpen} />
        <SidebarItem icon='person-circle' label='You' collapsed={!isMenuOpen} />
        <SidebarItem icon='download' label='Downloads' collapsed={!isMenuOpen} />
        {isMenuOpen && <hr className='border-gray-300 my-2' />}
      </div>

      {isMenuOpen && (
        <>
          <div className='py-2'>
            <p className='px-4 py-1 text-gray-600 font-semibold'>You</p>
            <SidebarItem icon='library' label='Library' />
            <SidebarItem icon='time' label='History' />
            <SidebarItem icon='videocam' label='Your videos' />
            <SidebarItem icon='watch' label='Watch later' />
            <SidebarItem icon='thumbs-up' label='Liked videos' />
          </div>
          <hr className='border-gray-300 my-2' />

          <div className='py-2'>
            <p className='px-4 py-1 text-gray-600 font-semibold'>Subscriptions</p>
            <SidebarItem icon='person-circle' label='Channel 1' />
            <SidebarItem icon='person-circle' label='Channel 2' />
            <SidebarItem icon='person-circle' label='Channel 3' />
          </div>
          <hr className='border-gray-300 my-2' />

          <div className='py-2'>
            <p className='px-4 py-1 text-gray-600 font-semibold'>Explore</p>
            <SidebarItem icon='flame' label='Trending' />
            <SidebarItem icon='musical-notes' label='Music' />
            <SidebarItem icon='game-controller' label='Gaming' />
            <SidebarItem icon='newspaper' label='News' />
            <SidebarItem icon='trophy' label='Sports' />
          </div>
          <hr className='border-gray-300 my-2' />

          <div className='py-2'>
            <SidebarItem icon='settings' label='Settings' />
            <SidebarItem icon='flag' label='Report history' />
            <SidebarItem icon='help-circle' label='Help' />
            <SidebarItem icon='alert-circle' label='Send feedback' />
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
