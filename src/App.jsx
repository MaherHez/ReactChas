import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Presentation from './Presentation';
import Footer from './footer';
import FunButton from './FunButton';
import Workbox from './Workbox';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import logo from './assets/mux.png'
import sun from './assets/sun.png'
import rec from './assets/rectangle.png'


const GridContainer = styled.div`
display: grid;
grid-template-rows: 7rem 10rem repeat(2, 1fr) 2rem;
grid-template-columns: 7rem repeat(4, 1fr);
min-height: 100vh;
grid-template-areas: 
"logo . top sun sun"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer"

;`

const LogoContainer = styled.div`
  max-width: 3.5rem;
  grid-area: logo;
  padding: 5%;
  align-self: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(+45deg) scale(1.1);
  }
`;

const SunContainer = styled.div`
  max-width: 18.5rem;
  grid-area: sun;
 
`;

const RecContainer = styled.div`
  width: 100;
  grid-area: rec;
 
`;

const StyledImg = styled.img`
width: 100%;`

const MainContainer = styled.div`
grid-area: main;`;


const StyledFooter = styled.footer`
grid-area: footer;
display: flex;
`;


function App() {

  return (
    <Router>
      <GridContainer>
        <LogoContainer>
          <StyledImg src={logo} alt='logo' />
        </LogoContainer>
        <Navbar />
        <SunContainer><StyledImg src={sun} /></SunContainer>
        <MainContainer>
          <Presentation />
       {/*    <Workbox></Workbox> */}
         {/*  <RecContainer><StyledImg src={rec} /></RecContainer> */}
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/portfolio">
              <p>Work</p>
            </Route>
          </Switch>
        <FunButton></FunButton>
        </MainContainer>
        <Footer/>
      </GridContainer>
    </Router>
  );
}

// Läxa tills 7/3 
// Skapa din personliga footer i samråd med andra på discord.
// Obs. Discord är ICKE frivillig men ni behöver inte göra hela läxan på discord
// Titta på exempel på andra portföljer, du kan tex ha med linkedin icon och figma ikon? Frivilligt
// Tips att researcha "FontAwesome"
// Om du blir klar med detta, gör samma sak med Navbar och pusha ditt projekt till din github och skicka din länk till mig.
export default App;