const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex gap-2 items-center'>
      <ion-icon size='large' name='person-circle-outline'></ion-icon>
      <p className='font-bold'>{name}</p>
      <p className='text-sm'>{message}</p>
    </div>
  );
};

export default ChatMessage;
