import React, { useState } from 'react';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { Breadcrumbs, Link, Typography } from '@mui/material';

interface Row {
    id: number;
    nameCourse: string;
    period: string;
    age: number;
    fullName?: string;
}

interface Rows {
    rows: Row[];
}
interface params {
    row: Row;
}
const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'nameCourse',
    headerName: 'Curso',
    width: 350,
    editable: true,
  },
  {
    field: 'period',
    headerName: 'Período',
    width: 350,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 350,
    valueGetter: (params: params) =>
      `${params.row.nameCourse || ''} ${params.row.period || ''}`,
  },
];

//traremos da REST API construída em NestJS que está na Azure
const rows = [
  { id: 1, period: 'Snow', nameCourse: 'Jon', age: 35 },
  { id: 2, period: 'Lannister', nameCourse: 'Cersei', age: 42 },
  { id: 3, period: 'Lannister', nameCourse: 'Jaime', age: 45 },
  { id: 4, period: 'Stark', nameCourse: 'Arya', age: 16 },
  { id: 5, period: 'Targaryen', nameCourse: 'Daenerys', age: null },
  { id: 6, period: 'Melisandre', nameCourse: null, age: 150 },
  { id: 7, period: 'Clifford', nameCourse: 'Ferrara', age: 44 },
  { id: 8, period: 'Frances', nameCourse: 'Rossini', age: 36 },
  { id: 9, period: 'Roxie', nameCourse: 'Harvey', age: 65 },
];


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
interface MainProps {
    welcome: string;
    route: string; 
}

export default function CoursesSchedulesGrid({welcome,route}:MainProps){

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
            Cursos
        </Link>
        <Typography color="text.primary">Cursos Agendados</Typography>
        </Breadcrumbs>
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