import React from 'react';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';
import UserCreateForm from '../components/Form/User/Create';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const UsersNew:React.FC = () =>(
    <Container>
        <SideBar />
        <UserCreateForm />
    </Container>
)


export default UsersNew;