import React, { useState } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 1.5em;
    color: #333;
    @media (min-width:576px){
        font-size: 4em;
        transition-duration: 0.5s;
        &:hover { 
            color: #2980b9;
            transform: translateX(100px);
            cursor: pointer;
        }
    }
    @media (min-width:920px){
        font-size: 5em;
    }  
    @media (min-width:1280px){
        font-size: 7em;
    }  
   
`

const fontSize = '3em';
const color= '#2c3e50';

const H2 = styled.h2`
    font-size: ${fontSize};
    color: ${color};
`

interface MainProps {
    welcome: string;
    route: string; 
}
interface Address {
    street: string;
    zipcode: string;
}
interface User {
    name: string;
    age: number,
    country: string;
    address: Address,
    admin: boolean;
}

export default function Main({welcome,route}:MainProps){

    //Imutabilidade - Na programação funcional, os dados não mudam, eles evoluem.
    //
    const [user, setUser] = useState<User | null>(null);

    const onChange = () => setUser({
        name: 'Vanessa Blanco',
        age: 28,
        country: 'Brasil',
        address: {
            street: 'Av. José Versolato, 101, 12º andar',
            zipcode: '09750-730'
        },
        admin: false,
    })

    return(
    //React Fragment Component
    <>
        {user && <div>Bem vindo {user.name} </div>}
        <div><button onClick={onChange}>Carregar o nome</button></div>
        
        <H1>{welcome}</H1>
    </>
    )   

}