import React from 'react'
import styled from 'styled-components'

const FunButtonStyled = styled.button`
height: 3rem;
width: 12rem;
background-color: #EFD075;
color: black;
border: 2px black solid;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
cursor: pointer;
position: relative;

p{font-weight:bold;
  color: black;
  font-size: 0.9rem;
}

::after{
 content: "";
    position: absolute;
    top: 4px;
    left: 1px;
    width: 103%;
    height: 104%;
    background-color: #ECE0E0;
    z-index: -1;
    border-radius: 0.5rem;
    border: 2px black solid;
    transition: transform 0.2s ease-out;

}

//& referar till parenten dvs knappen
&:hover::after {
    transform: scale(0.95);
  
  }

;`



function FunButton() {
  return (
    <FunButtonStyled><p>Read more</p></FunButtonStyled>
  )
}

export default FunButton