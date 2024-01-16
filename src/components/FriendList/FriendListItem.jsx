// import clsx from 'clsx';
import css from'./FriendList.module.css'
// import { RiRadioButtonLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import defaultAnimal from './stingray.png';

export const FriendProfile = ({ friends: {avatar, name, isOnline} }) => {
  const animalImage = avatar || defaultAnimal;

  // const statusClasses = clsx(css.status, {
  //   [css.online]: isOnline,
  //   [css.offline]: !isOnline,
  // });

  const statusClass = isOnline ? css.online : css.offline;
  // const statusIcon = isOnline ? css.iconOnline : css.iconOffline;
  const statusIcon = isOnline ?
      <FaRegCircleCheck className={css.iconOnline} /> : 
      <FaRegCircleXmark className={css.iconOffline} />;
  return (
    <div>
      {statusIcon}
      {/* <RiRadioButtonLine className={statusIcon} /> */}
      <img className={css.avatar} src={animalImage} alt={`${name}'s avatar`} width="48" />
      <p className={css.name}>{name}</p>
      {/* <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p> */}
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};