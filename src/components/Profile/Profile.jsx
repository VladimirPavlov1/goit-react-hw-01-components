import PropTypes from "prop-types"
import { Container,Mail,Name,UserPhoto,Location,Stats,Item,UserWrapper, TabTitle, TabQuantity } from "./Profile.styled";



export const Profile = ({user:{username,tag,location,avatar,stats:{followers,views,likes}}})=><Container>
  <UserWrapper>
    <UserPhoto
      src={avatar}
      alt={username}
      
    />
    <Name>{username}</Name>
    <Mail>{tag}</Mail>
    <Location>{location}</Location>
  </UserWrapper>

  <Stats>
    <Item>
      <TabTitle>Followers</TabTitle>
      <TabQuantity>{followers}</TabQuantity>
    </Item>
    <Item>
      <TabTitle>Views</TabTitle>
      <TabQuantity>{views}</TabQuantity>
    </Item>
    <Item>
      <TabTitle>Likes</TabTitle>
      <TabQuantity>{likes}</TabQuantity>
    </Item>
  </Stats>
</Container>

Profile.propTypes={
    username:PropTypes.string,
    tag:PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
    followers:PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired}))
}