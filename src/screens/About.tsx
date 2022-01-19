import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';
import createGlobalStyle from '../styles/global';

const GlobalStyle = createGlobalStyle;
const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const About:React.FC = () =>(
    <Container>
        <GlobalStyle />
        <SideBar />
        <Main welcome="Quem Somos" route="Quem Somos"/>
    </Container>
)


export default About;