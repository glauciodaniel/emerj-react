import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';
import createGlobalStyle from '../styles/global';
import UsersGrid from '../components/usersGrid';
import CheckoutGroup from '../components/CheckoutGroup';

const GlobalStyle = createGlobalStyle;
const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const Checkout:React.FC = () =>(
    <Container>
        <GlobalStyle />
        <SideBar />

      { /*ocultando localStorage.getItem("accessToken") && <CheckoutGrid  welcome="Usuários" route="Checkout" />*/}
      
      {localStorage.getItem("accessToken") ? <CheckoutGroup /> : document.location.href = '/login'}

    </Container>
)


export default Checkout;