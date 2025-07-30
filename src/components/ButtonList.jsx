const categories = [
  'All',
  'Trending',
  'Gaming',
  'Music',
  'News',
  'Movies',
  'Podcasts',
  'Live',
  'Esports',
  'Comedy',
  'Education',
  'Reaction videos',
  'Counter-Strike 2',
  'League of Legends',
  'Superhero movies',
  'Kapil Sharma',
  'Watched',
  'Recently Uploaded',
  'New to you',
];

const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto gap-3 py-3 whitespace-nowrap hide-scrollbar'>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-1 rounded-lg whitespace-nowrap text-sm font-medium ${
            index === 0
              ? 'bg-black text-white' // Active category
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          } transition-colors`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
