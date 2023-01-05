
import { FriendListItem } from "./FriendListItem"
import { Container,List,Item } from "./FriendList.styled"
import {PropTypes} from "prop-types"

export const FriendList=({friends})=>{

    

return <Container>
<List>
    {friends.map(friend=>{
        return <Item key={friend.id}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
        </Item>
    })}
</List>
</Container>

}

FriendList.propTypes={
    friends:PropTypes.arrayOf(
        PropTypes.exact({
            avatar:PropTypes.string,
            name:PropTypes.string,
            isOnline: PropTypes.bool,
            id:PropTypes.number
        })
    ).isRequired
}

