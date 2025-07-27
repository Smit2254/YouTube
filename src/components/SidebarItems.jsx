const SidebarItem = ({ icon, label, active, collapsed }) => {
  return (
    <div
      className={`flex items-center ${
        collapsed ? 'flex-col justify-center text-sm gap-2' : 'gap-4'
      } px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-xl ${
        active ? 'bg-gray-200 font-semibold rounded-xl' : ''
      }`}
    >
      <ion-icon name={`${icon}-outline`} size='small'></ion-icon>
      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;
