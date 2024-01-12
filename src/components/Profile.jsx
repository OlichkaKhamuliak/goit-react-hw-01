export const Profile = (
    {userData: {username, tag, location, avatar, stats: {followers, views, likes}}}
) => {
    return <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={`${username}'s avatar`}
      className="avatar"
    />
    <h1 className="name">{username}</h1>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats-list">
    <li className="stats-list-item">
      <span className="label">Followers</span>
      <span className="value">{followers}</span>
    </li>
    <li className="stats-list-item">
      <span className="label">Views</span>
      <span className="value">{views}</span>
    </li>
    <li className="stats-list-item">
      <span className="label">Likes</span>
      <span className="value">{likes}</span>
    </li>
  </ul>
</div>
}