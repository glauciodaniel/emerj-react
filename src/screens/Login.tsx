import React from 'react';
import  styled  from 'styled-components';
import SignIn from '../components/Form/Auth/SignIn';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`
export default function Login(){
    
    return (
    <Container>
        <SignIn />
    </Container>
    )
}
