import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  console.log(searchParams.get('v'));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='px-6 py-3'>
      <iframe
        className='rounded-xl'
        width='1191'
        height='670'
        src={'https://www.youtube.com/embed/' + searchParams.get('v')}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
