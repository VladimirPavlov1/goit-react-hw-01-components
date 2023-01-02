import {Profile} from "./Profile/Profile"
import user from "../components/user.json"


export const App = () => {
  return (
    <div>
      <Profile user={user}/>
    </div>
  );
};
