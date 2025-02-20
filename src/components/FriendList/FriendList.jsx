import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  const friendsList = JSON.parse(friends);
  return (
    <ul className={css.friendsCollection}>
      {friendsList.map(friend => {
        return (
          <li key={friend.id} className={css.friendItem}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
