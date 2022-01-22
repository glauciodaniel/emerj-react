import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import axios from 'axios';
interface Row {
    id: number;
    nameCourse: string;
    period: string;
    age: number;
    fullName?: string;
}

interface params {
    row: Row;
}
const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'name',
    headerName: 'Nome',
    width: 350,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 350,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: 'Data de Cadastro',
    type: 'string',
    width: 350,
    editable: true,
  },
  {
    field: 'active',
    headerName: 'Status',
    type: 'string',
    width: 350,
  },
];

//traremos da REST API construída em NestJS que está na Azure





const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Header = styled.header`
    min-height: 200px;
    width: 100%;
    padding-top: 2%;
    padding-left: 2%;
`

const Block = styled.div`
    width:90%;
    height: 700px;
    margin: 0 auto;

`

const NewUser = styled.div`
  position: absolute;
  right: 5%;
`
interface MainProps {
    welcome: string;
    route: string; 
}

export default function UsersGrid({welcome,route}:MainProps){

    const [rows, setRows] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(()=>{
      
           const fetchUsers = async () =>{
                setLoading(true);

                const response = await axios.get(
                    'http://20.120.7.70/user'
                );
                    
                setRows(response.data);
                setLoading(false);
            }

            fetchUsers();
    }, []);



    return(
    <Container>
        <Header>
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
            Bitcode
        </Link>
        <Link
            underline="hover"
            color="inherit"
            href="/courses"
        >
            Usuários
        </Link>
        <Typography color="text.primary">Lista de Usuários</Typography>
        </Breadcrumbs>
            <NewUser>
              <Button href="/users/new" variant='contained'>
                  Novo Usuário
              </Button>
            </NewUser>
        </Header>     
        <Block>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
      </Block>   
    </Container>
    )   

}