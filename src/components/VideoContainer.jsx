import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideosWithAvatars();
  }, []);

  const fetchVideosWithAvatars = async () => {
    const videoRes = await fetch(YOUTUBE_API);
    const videoData = await videoRes.json();

    const videoItems = videoData.items || [];
    const channelIds = [...new Set(videoItems.map((v) => v.snippet.channelId))];

    const channelRes = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(',')}&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    const channelData = await channelRes.json();

    const channelMap = {};
    channelData.items.forEach((ch) => {
      channelMap[ch.id] = ch.snippet.thumbnails?.default?.url;
    });

    const enrichedVideos = videoItems.map((video) => ({
      ...video,
      channelAvatar: channelMap[video.snippet.channelId],
    }));

    setVideos(enrichedVideos);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
      {videos.map((video) => (
        <Link to={'/watch?v=' + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
