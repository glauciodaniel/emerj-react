import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';
import CoursesGrid from '../components/CoursesGrid';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const Courses:React.FC = () =>(
    <Container>
        <SideBar />
        <CoursesGrid  welcome="Cursos" route="cursos" />
    </Container>
)


export default Courses;