const VideoCard = ({ info }) => {
  const { snippet, statistics, channelAvatar } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  const views = Number(statistics?.viewCount).toLocaleString();
  const uploadDate = new Date(publishedAt).toLocaleDateString();

  return (
    <div className='w-full max-w-sm cursor-pointer'>
      <img
        src={thumbnails?.maxres?.url || thumbnails?.high?.url}
        alt={title}
        className='rounded-xl w-full aspect-video object-cover mb-2'
      />

      <div className='flex gap-3'>
        <img
          src={channelAvatar || 'https://www.gstatic.com/youtube/img/channel/default_profile_48.png'}
          alt='Channel Avatar'
          className='w-9 h-9 rounded-full object-cover'
        />
        <div className='flex flex-col'>
          <h3 className='text-sm font-semibold line-clamp-2'>{title}</h3>
          <p className='text-xs text-gray-600'>{channelTitle}</p>
          <p className='text-xs text-gray-600'>
            {views} views • {uploadDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
