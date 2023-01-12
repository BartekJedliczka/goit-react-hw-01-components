import Profile from './profile/Profile';
import user from './profile/user.json';

import Statistics from './statistics/Statistics';
import data from './statistics/data.json';

// import FriendList from './friend-list/FriendList';
// import friends from './friend-list/friends.json';

// import TransactionHistory from './transaction/transactionHistory';
// import transactions from './transaction/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
<<<<<<< HEAD
      <FriendList friends={friends} />
=======
      {/* <FriendList friends={friends} /> */}
>>>>>>> parent of 497ca6f (Update App.jsx)
      {/* <TransactionHistory items={transactions} />; */}
    </>
  );
};
