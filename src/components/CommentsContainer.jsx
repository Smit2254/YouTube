import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CommentsContainer = () => {
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const baseUrl = `https://www.googleapis.com/youtube/v3/commentThreads`;
        const url = `${baseUrl}?part=snippet,replies&videoId=${videoId}&maxResults=20&key=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        setComments(data.items);
      } catch (err) {
        console.error('Error fetching comments:', err);
      }
    };

    if (videoId) fetchComments();
  }, [videoId]);

  return (
    <div className='mt-6'>
      <h2 className='text-2xl font-bold mb-4'>Comments:</h2>
      <ul className='space-y-6'>
        {comments.map((item) => {
          const top = item.snippet.topLevelComment.snippet;

          return (
            <li key={item.id} className='flex gap-3 items-start'>
              <img src={top.authorProfileImageUrl} alt='avatar' className='w-10 h-10 rounded-full' />
              <div>
                <p className='text-sm font-semibold'>{top.authorDisplayName}</p>
                <p className='text-xs text-gray-500'>{new Date(top.publishedAt).toLocaleDateString()}</p>
                <p className='text-sm mt-1'>{top.textOriginal}</p>

                {/* Replies (if any) */}
                {item.replies && item.replies.comments && (
                  <ul className='ml-8 mt-3 border-l border-gray-200 pl-4 space-y-4'>
                    {item.replies.comments.map((reply) => {
                      const r = reply.snippet;
                      return (
                        <li key={reply.id} className='flex gap-3 items-start'>
                          <img src={r.authorProfileImageUrl} alt='avatar' className='w-8 h-8 rounded-full' />
                          <div>
                            <p className='text-sm font-semibold'>{r.authorDisplayName}</p>
                            <p className='text-xs text-gray-500'>{new Date(r.publishedAt).toLocaleDateString()}</p>
                            <p className='text-sm mt-1'>{r.textOriginal}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsContainer;
