import React from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import Nav from './Nav'
import Input from './Input'
const HeaderStyled=styled.div`
    display:flex;
    height:60px;
    align-items:center;
    background-color:#131921;
    position:sticky;
    top:0;
    z-index:100;
`
function Header() {
    return (
        <HeaderStyled>
            <Brand/>
            <Input />
            <Nav />  
        </HeaderStyled>
    )
}

export default Header












