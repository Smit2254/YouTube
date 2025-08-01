import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='flex-1 overflow-y-auto'>
        <Outlet /> {/* or <MainContainer /> / <WatchPage /> */}
      </div>
    </div>
  );
};

export default Body;
