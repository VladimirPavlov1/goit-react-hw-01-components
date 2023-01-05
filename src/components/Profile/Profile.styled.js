import styled from '@emotion/styled'

export const Container = styled.div`
    width:320px;
    margin: 0 auto;
    padding:20px;
    background-color: ${props=>`${props.theme.color.grey}`};
`;

export const UserWrapper = styled.div`
    console.log(theme)
    align-content: center;
    text-align: center;
    background-color: ${props=>`${props.theme.color.white}`};
    padding:20px;
`;

export const UserPhoto = styled.img`
    width: 150px;
    padding:10px;
    border-radius: 50%;
    border: 1px solid ${props=>`${props.theme.color.grey}`};

`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 800;

`;
export const Mail = styled.p`
    font-size: 20px;
    font-weight: 800;

`;

export const Location = styled.p`
    font-size: 20px;
    font-weight: 800;

`;

export const Stats = styled.ul`
    display: flex;
    justify-content:center;
    background-color:${props=>`${props.theme.color.white}`};

    list-style: none;
    margin: 0;
    padding-top: 10px ;
`;

export const Item = styled.li`
    padding: 5px;
    width:100px;
    border:1px solid ${props=>`${props.theme.color.grey}`};
    background-color: ${props=>`${props.theme.color.aqua}`};
`;

export const TabTitle = styled.span`
    display: block;
    text-align: center;
    font-size: 18px;
`;

export const TabQuantity = styled.span`
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color:${props=>`${props.theme.color.grey}`};
`;