import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';
import createGlobalStyle from '../styles/global';
import UsersGrid from '../components/usersGrid';
import { Button } from '@mui/material';

const GlobalStyle = createGlobalStyle;
const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const Users:React.FC = () =>(
    <Container>
        <GlobalStyle />
        <SideBar />

        <UsersGrid  welcome="Usuários" route="users" />
    </Container>
)


export default Users;