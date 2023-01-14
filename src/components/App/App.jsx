import Profile from 'components/Profile/Profile';
import Friend from 'components/FriendList/Friends';
import Stats from 'components/Stats/Stats';
import Transactions from 'components/Transactions/Transactions';
import user from '../../user.json';
import statistic from '../../data.json';
import list from '../../friends.json';
import transactions from '../../transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        src={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Stats title="Upload stats" stats={statistic}></Stats>
      <Stats title={statistic.title} stats={statistic}></Stats>
      <Friend friends={list}></Friend>
      <Transactions items={transactions}></Transactions>
    </>
  );
};
