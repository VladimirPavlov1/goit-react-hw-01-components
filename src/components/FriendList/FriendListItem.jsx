
import { PropTypes } from "prop-types"
import { UserStatus,Avatar, UserName } from "./FriendListItem.styled"




export const FriendListItem=({avatar,name,isOnline})=>{
  
   return<>
    <UserStatus stat={isOnline}>{isOnline}</UserStatus>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <UserName>{name}</UserName>
  </>
}

FriendListItem.propTypes={
  avatar:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
}