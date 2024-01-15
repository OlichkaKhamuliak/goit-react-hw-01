import userData from '../userData.json'
import friends from '../friends.json'
import { Profile } from "./Profile/Profile"
import { TaskTitle } from './TaskTitle/TaskTitle'
import { FriendList } from './FriendList/FriendList'

export const App = () => {
  return (
  <div>
    <TaskTitle>Task 1</TaskTitle>
    <Profile userData={userData}/>
    <TaskTitle>Task 2</TaskTitle>
    <FriendList friends={friends}/>
    <TaskTitle>Task 3</TaskTitle>
  </div>
  )
}
