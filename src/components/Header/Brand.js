import React from 'react'
import styled from 'styled-components'
const BrandStyled=styled.div`
img{
    width:100px;
object-fit:contain;
margin:20px 20px 0 20px;

}
`
function Brand() {
    return (
        <BrandStyled>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="brandimg"/>
        </BrandStyled>
    )
}

export default Brand