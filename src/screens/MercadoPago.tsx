import React from 'react';
import  styled, {createGlobalStyle}  from 'styled-components';
import SideBar from '../components/Menus/SideBar';
import MercadoPagoCheckout from '../components/MercadoPagoCheckout';


const GlobalStyle = createGlobalStyle`
body { display: flex;}
#form-checkout { 
    width: 30%;
    display: flex;
    flex-direction: column;
    margin:0 auto;
    input, select, button, option {
        width: 100%;
        min-height: 40px;
        margin: 1%;
        border: solid 0.5px #ddd;
        border-radius: 5px;
        padding-left: 20px;
        outline-color: #4c6ecb;
        &:focus {
            color: #4c6ecb;
        }
    }
}
`
//implementar o iMask.
// ou react-text-mask

const Container = styled.div`
    display: flex;
    flex-direction: row;

`
export default function MercadoPago(){
    return (
    <Container>
        <GlobalStyle />
        <SideBar />
        <MercadoPagoCheckout />
    </Container>
    )
}
