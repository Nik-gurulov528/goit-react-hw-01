import './App.css';
import userData from './userData';
import friends from './friend';
import transactions from './transactions';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const personData = JSON.parse(userData);

function App() {
  return (
    <>
      <Profile
        name={personData.username}
        tag={personData.tag}
        location={personData.location}
        image={personData.avatar}
        stats={personData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
