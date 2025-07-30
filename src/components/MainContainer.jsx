import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='flex-1 h-full overflow-y-auto px-6 pb-28 hide-scrollbar'>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
