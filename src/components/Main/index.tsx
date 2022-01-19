import React from 'react';
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

export default function Main({welcome,route}:MainProps){

    return(
    //React Fragment Component
    <>
        <div>{route}</div>
        <H1>{welcome}</H1>
    </>
    )   

}