import {Profile} from "./Profile/Profile"
import user from "../components/user.json"
import {Statistics} from "./Statistics/Statistics"
import data from "../components/data.json"
import friends from "../components/friends.json"
import { FriendList } from "./FriendList/FriendList"



export const App = () => {
  return (
    <div>
      <Profile user={user}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
    </div>
    
  );
};
