import React from 'react';
import MenuItem from '../MenuItem';
import { menu } from '../MenuItem/MenuItemData';
import {SideBarNav} from './styles';
import styled from 'styled-components';
//TypeScript - Superset JavaScript que cria e obriga o uso de dados tipados

const SideBarContainer = styled.section`
    width: 50px;
    height: 100vh;
    background: #273c75;
    color: #f5f6fa;
    transition-property: width;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.5, 0.5, 0.5,);
    a { width: 200px; color: #f5f6fa; text-decoration: none; display: flex; align-items: center;
    padding-left: 13px;
        svg {
            margin-right: 30px;
        }
    }
    ul > li  span.label { width: 100px;}    
    a:hover { text-decoration: underline}
    &:hover{
        width: 350px;  
        ul > li  span.label { display: block;}    
    }
`
interface SideBarProps {
    menuLateralText?: string;
}

export default function SideBar({menuLateralText}:SideBarProps){

//    condicao E condicao
    return(
    <SideBarContainer>
        <SideBarNav>
            {menuLateralText && <div>{menuLateralText}</div>}
            <MenuItem linkProps={menu}/>
        </SideBarNav>
    </SideBarContainer>
    )
}
