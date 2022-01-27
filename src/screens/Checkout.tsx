import React from 'react';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';
import CheckoutGroup from '../components/CheckoutGroup';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const Checkout:React.FC = () =>(
    <Container>
        <SideBar />

      { /*ocultando localStorage.getItem("accessToken") && <CheckoutGrid  welcome="Usuários" route="Checkout" />*/}
      
      {localStorage.getItem("accessToken") ? <CheckoutGroup /> : document.location.href = '/login'}

    </Container>
)


export default Checkout;