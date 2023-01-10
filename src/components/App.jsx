import Profile from './profile/Profile';
import user from './profile/user.json';

// import Statistics from './statistics/Statistics';
// import data from './statistics/data.json';

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
      {/* <Statistics title="Upload stats" stats={data} /> */}
    </>
  );
};
