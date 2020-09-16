import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'

const InputStyled=styled.div`
    display:flex;
    align-items:center;
    flex:1;
    border-radius:24px;
    .input{
        
    }
    .icon{
        padding:5px;
        height: 22px !important;
        background-color:#cd9042;
    }
`
function Input() {
    return (
        <InputStyled>
            <input type="text" className="input"/>
            <SearchIcon className="icon" />
        </InputStyled>
    )
}

export default Input