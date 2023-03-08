import React from "react";
import styled from "styled-components";


const StyledPresentation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left:3rem;
h1 {color: white;
font-size:3.5rem;
margin-bottom:0;}
p {max-width:20rem;
margin: 0.5rem ;}
`;


const Presentation = () => {

    return (
        <StyledPresentation>
            <h1>Maher Hezam</h1>
            <p>If its not obvious enough I’m Maher a UX-designer, with a passion for human centered design and psychology.</p>
            <p> I’ve spent years working with human behaviour and I’m looking forward to combine that with my design skills.</p>
        </StyledPresentation>
    )


};
export default Presentation