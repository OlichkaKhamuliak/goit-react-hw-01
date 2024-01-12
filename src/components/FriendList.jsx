import { FriendProfile } from "./FriendListItem"

export const FriendList = ({friends}) => {
return (
<ul className="friend-list">
	{friends.map(friend => (
      <li key={friend.id} className="friend-list-item">
        <FriendProfile friends={friend}/>
      </li>
    ))}
</ul>
);
};