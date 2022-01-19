import styled from 'styled-components';


export const SideBarNav = styled.nav`

    width: 100%;
    height: calc(100vh - 100px);
    
    > div {
        font-size: 2em;
        font-weight: 100;
    }
    > ul {
        margin: 100px 0 0 0; 
        padding:0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        > li {
            display: flex;
            align-items: center;
            width: 100%;
            flex-direction: row;
            > svg {
                margin-left: 13%;
                margin-right: 10px;
            }
            span.label{
                display: none;
            }
            line-height: 50px;
            list-style: none;
            margin-top: 30px;
            height: 50px;
        }
    }
`
