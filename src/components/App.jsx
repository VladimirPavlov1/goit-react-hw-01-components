import {Profile} from "./Profile/Profile";
import user from "../data/user.json";
import {Statistics} from "./Statistics/Statistics";
import data from "../data/data.json";
import friends from "../data/friends.json";
import { FriendList } from "./FriendList/FriendList";
import { Transactions } from "./Transactions/Transactions";
import transactions from "../data/transactions.json";



export const App = () => {
  return (
    <div>
      <Profile user={user}/>
      <Statistics title="UPLOAD STAT" stats={data} />
      <FriendList friends={friends}/>
      <Transactions trans={transactions}/>
    </div>
    
  );
};
