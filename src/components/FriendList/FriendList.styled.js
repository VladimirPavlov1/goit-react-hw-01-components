import styled from '@emotion/styled'

export const Container = styled.div`
    width: 250px;
    height: auto;
    margin: 20px auto;
`;

export const List = styled.ul`
    display: block;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 20px;
    border:1px solid ${props=>`${props.theme.color.grey}`};
`;