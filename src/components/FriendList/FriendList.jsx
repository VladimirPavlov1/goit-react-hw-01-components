import { FriendListItem } from "./FriendListItem"



export const FriendList=({friends})=>{
return <div>
    <ul class="friend-list">
    {friends.map(friend=>{
        return <li key={friend.id}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
        </li>
    })}
</ul>
</div>

}