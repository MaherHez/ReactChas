import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa';


const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;

`;


const StyledFooterText = styled.footer`
  display: flex;
  justify-content: flex-start;
  grid-area: footer;
`;


const StyledFooterIcons = styled.footer`
  display: flex;
  justify-content: center;

`;


const StyledLinkIcon = styled.a`
  color: black;
  margin: 1rem;
  font-size: 1.5rem;
  &:hover {
    transform: scale(1.1);
    color: white;
  }
`;



function Footer() {
  return (


    <>

      <>   
      <StyledFooterText>
        <p>Maher Hezam - UX/UI-Designer</p>
      </StyledFooterText>
      </>

      <StyledFooter>


        <StyledFooterIcons>
          <StyledLinkIcon href="https://github.com/MaherHez"><FaGithub /></StyledLinkIcon>
          <StyledLinkIcon href="https://www.linkedin.com/in/maherhezam/"><FaLinkedin /></StyledLinkIcon>
          <StyledLinkIcon href="https://github.com/MaherHez"><FaFigma /></StyledLinkIcon>
        </StyledFooterIcons>




      </StyledFooter>

    </>
  )
}

export default Footer;
