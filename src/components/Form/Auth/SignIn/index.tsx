import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const defaultFormData = {
    email: '',
    password: '',
}
const Container = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
        form {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }
`


export default function SignIn(){

const [formData, setFormData] = useState(defaultFormData);
//destructuring Assignment
const {email, password} = formData;
const [success, setSuccess] =useState(false);
const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    
    setFormData((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value,
    }))
}
const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    const response = await axios.post(
        'http://20.120.7.70/auth/login', formData
    );
    
    console.log(response.data);

    if(response.data.accessToken){
        localStorage.setItem("accessToken", response.data.accessToken);
        setSuccess(true);
    }
}
    return (
        <Container>
           
                <Box component="form" sx={{
                    "& .MuiTextField-root": { m: 1, width: "50%" },
                }}
                onSubmit={onSubmit}>
                        <TextField
                        required
                        id="email"
                        label="E-mail"
                        placeholder="Digite o E-mail"
                        onChange={onChange}
                        value={email}
                        />
                        <TextField
                        required
                        id="password"
                        label="Senha"
                        onChange={onChange}
                        value={password}
                        placeholder="Digite a Senha"
                        type="password"
                        />
                        <Button 
                        sx={{width:'50%', m:'1%'}}
                        size="medium"
                        variant="contained"
                        endIcon={<SendIcon />}
                        type="submit"
                        >Enviar</Button> 
        {success &&  <Alert severity="success">Usuário autenticado com sucesso</Alert>}
                </Box>
            
        </Container>
    )
}