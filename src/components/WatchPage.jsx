import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());

    const getVideoDetails = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${searchParams.get('v')}&key=${
          import.meta.env.VITE_GOOGLE_API_KEY
        }`
      );
      const data = await res.json();
      setVideoDetails(data.items[0]);
    };

    getVideoDetails();
  }, [dispatch, searchParams]);

  return (
    <div className='flex py-3'>
      <div className='flex flex-col lg:flex-row gap-6 px-6'>
        <div className='flex-1'>
          <div>
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

          {videoDetails && (
            <div className='my-4'>
              <h1 className='text-xl font-semibold'>{videoDetails.snippet.title}</h1>
              <div className='text-sm text-gray-600'>
                {videoDetails.snippet.channelTitle} • {Number(videoDetails.statistics.viewCount).toLocaleString()} views
              </div>
              <div className='flex gap-4 mt-4'>
                <button className='text-sm font-semibold text-blue-600 border border-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-50 transition'>
                  Join
                </button>

                <button className='text-sm font-semibold text-white bg-black px-4 py-1.5 rounded-full hover:opacity-80 transition'>
                  Subscribe
                </button>
              </div>
            </div>
          )}
          <CommentsContainer />
        </div>
      </div>

      <div className='w-full'>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
