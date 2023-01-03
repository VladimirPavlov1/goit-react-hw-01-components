import {Profile} from "./Profile/Profile"
import user from "../components/user.json"
import {Statistics} from "./Statistics/Statistics"
import data from "../components/data.json"




export const App = () => {
  return (
    <div>
      <Profile user={user}/>
      
      
      <Statistics title="Upload stats" stats={data} />
    </div>
    
  );
};
