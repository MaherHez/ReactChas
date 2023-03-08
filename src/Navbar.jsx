import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-area: top;
`;

const MyButton = styled.button`
  padding: 1em;
  background-color: #386641;
  border-radius: 50px;
  color: white;
  border: none;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
    color: black;
    grid-area: top;
    margin: 0.6rem; &:hover {
    transform: scale(1.1);
  }
`;
const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/portfolio">Work</StyledLink>
            <StyledLink to="/about">About me</StyledLink>
            <MyButton>
            <StyledLink to="/contact">Contact</StyledLink></MyButton>
        </StyledNav>
    );
}

export default Navbar;
