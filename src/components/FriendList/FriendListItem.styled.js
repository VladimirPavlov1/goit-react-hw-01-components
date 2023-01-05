import styled from '@emotion/styled'

export const UserStatus = styled.span`
display: block;
width:16px;
height: 16px;
border-radius: 50%;
margin: auto 10px;
background-color:${({stat})=>{if(stat){return "green"} return "red"}}
`;

export const Avatar = styled.img`
    display: block;
    width: 60px;
    border-radius:50%;
`;

export const UserName = styled.p`
    display: block;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700px;
`;