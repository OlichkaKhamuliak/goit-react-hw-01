import { FriendProfile } from "./FriendListItem"
import css from'./FriendList.module.css'

export const FriendList = ({friends}) => {
return (
<ul className={css.friendList}>
	{friends.map(friend => (
      <li key={friend.id} className={css.friendItem}>
        <FriendProfile friends={friend}/>
      </li>
    ))}
</ul>
);
};