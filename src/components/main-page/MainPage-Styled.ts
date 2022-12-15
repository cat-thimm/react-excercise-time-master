import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { Column, Row, HeaderField } from "../../styled";
import {
    Link
  } from "react-router-dom";

export const Tabs = styled(HeaderField)`
margin-top: 0px;
`;

export const Spacer = styled.div`
width: 40px;
`;

export const TabRow = styled(Row)`
justify-content: space-between;
`;

export const Icon = styled(CgProfile)`
width: 32px;
height: 32px;
`

export const IconColumn = styled(Column)`
align-items:center;
margin-right: 10px;
`

export const MainPageTab = styled.div`
    text-decoration: none;
    margin: 10px;
    display: flex;
    align-items: center;
    
`
export const MainPageLinkTab = styled(Link).attrs((props: {active: boolean}) => props)`
    text-decoration: none;
    margin: 10px;
    display: flex;
    align-items: center;
    color: ${(props => props.active ? 'black' : 'rgba(74, 74, 74, 1)')};
    background-color: ${(props => props.active ? 'rgba(195, 195, 187, 0.47)' : '')};
`