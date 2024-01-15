import userData from '../components/Profile/userData.json'
import friends from '../components/FriendList/friends.json'
import transactions from '../components/TransactionHistory/transactions.json'
import { Profile } from "./Profile/Profile"
import { TaskTitle } from './TaskTitle/TaskTitle'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
  <div>
    <TaskTitle>Task 1</TaskTitle>
    <Profile userData={userData}/>
    <TaskTitle>Task 2</TaskTitle>
    <FriendList friends={friends}/>
    <TaskTitle>Task 3</TaskTitle>
    <TransactionHistory transactions={transactions}/>
  </div>
  )
}
