import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default FriendListItem;
