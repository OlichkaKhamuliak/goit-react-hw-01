export const FriendProfile = ({ friends: {avatar, name, isOnline} }) => {
  return (
    <div>
      <img className="friend-item-avatar" src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className="friend-item-name">{name}</p>
      <p className={`friend-item-status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};