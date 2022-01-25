import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #eee;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    > div {
        width: 40%;
        height: 50%;
        margin: 5% auto;
        background: #fff;
        box-shadow: 0px 0px  10px  1px rgba(0,0,0,0.1);
        border-radius: 5px;
    }
    > ul {
        margin: 0; padding: 0; display: inline-flex; margin-top 10%;
        li {
            list-style: none;
            min-width: 250px;
            text-align: center;
            line-height: 60px;
            font-size: 1.2em;
            display: flex;
            span {
                width: 50px; height: 50px; background: #aaa; color: #fff;
                border-radius: 50%; font-weight: bold;
                display: inline-flex; align-items:center; justify-content: center;
                font-size: 1.5em; margin-right: 20px;
            }
            &:nth-child(${1}) > span{
                background: #273c75;
            }
        }
    }
`
export default function CheckoutGroup(){
    return(
        <Container>
            <ul>
                <li><span>1</span>Itens</li>
                <li><span>2</span>Dados Pessoais</li>
                <li><span>3</span>Escolha a forma de Pagamento</li>
            </ul>
            <div>         

            </div>
        </Container>
    )

}