import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItems/FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ isOnline, avatar, name, id }) => (
      <FriendListItem
        isOnline={isOnline}
        avatar={avatar}
        name={name}
        key={id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default FriendList;
