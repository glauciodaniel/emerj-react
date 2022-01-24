import React from 'react';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';
import createGlobalStyle from '../styles/global';
import UsersGrid from '../components/usersGrid';
import SignIn from '../components/Form/Auth/SignIn';

const GlobalStyle = createGlobalStyle;
const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`
export default function Login(){
    
    return (
    <Container>
        <GlobalStyle />
        <SideBar />

        <SignIn />
    </Container>
    )
}
