import css from'./Profile.module.css'
import defaultAvatar from './avatar.png';

export const Profile = (
  { userData: { username, tag, location, avatar, stats } }
) => {
  const isDefaultAvatar = !avatar;
  const avatarImage = avatar || defaultAvatar;
  const avatarClass = isDefaultAvatar ? css.defaultAvatar : css.customAvatar

  const statsItems = Object.entries(stats).map(([key, value]) => (
    <li key={key} className={css.statsItem}>
      <span className={css.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
      <span className={css.value}>{value}</span>
    </li>
  ));
  return (
    <div className={css.profile}>

      <div className={css.description}>
        <img src={avatarImage} alt={`${username}'s avatar`} className={avatarClass} />
        <h1 className={css.name}>{username}</h1>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
  
      <ul className={css.statsList}>{statsItems}</ul>
    </div>
  );

/**
  |============================
  |АБО UL TA LI ВІДМАЛЬОВУЄМО ВРУЧНУ
  |============================
*/

//     {userData: {username, tag, location, avatar, stats: {followers, views, likes}}}
// ) => {
//     return <div className={css.profile}>
//   <div className={css.description}>
//     <img
//       src={avatar}
//       alt={`${username}'s avatar`}
//       className={css.avatar}
//     />
//     <h1 className={css.name}>{username}</h1>
//     <p className={css.tag}>@{tag}</p>
//     <p className={css.location}>{location}</p>
//   </div>

//   <ul className={css.statsList}>
//     <li className={css.statsItem}>
//       <span className={css.label}>Followers</span>
//       <span className={css.value}>{followers}</span>
//     </li>
//     <li className={css.statsItem}>
//       <span className={css.label}>Views</span>
//       <span className={css.value}>{views}</span>
//     </li>
//     <li className={css.statsItem}>
//       <span className={css.label}>Likes</span>
//       <span className={css.value}>{likes}</span>
//     </li>
//   </ul>
// </div>
}