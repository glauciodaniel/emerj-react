import React from 'react';
import NavBar from '../components/Menus/NavBar';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const Home:React.FC = () =>(
    <Container>
        <SideBar />
    </Container>
)


export default Home;