import styled from '@emotion/styled'
import { colorGenerator } from 'utills';

export const Section = styled.section`
   display:block;
   width:360px;
   margin: 20px auto;
`;

export const Title = styled.h2`
    text-align: center;
`;

export const StatList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Item = styled.li`
    background-color:${colorGenerator};`

export const TabTitle = styled.span`
    display: block;
    width:80px;
    text-align: center;
`;

export const Percentage = styled.span`
    display: block;
    width:80px;
    text-align: center;
`;
