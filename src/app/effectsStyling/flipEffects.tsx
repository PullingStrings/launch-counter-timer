import styled, { keyframes } from "styled-components"

const Container = styled.div`
  display: flex;
`

const flipDown = keyframes`
  0% { transform: rotateX(0); }
  100% { transform: rotateX(-180deg); }
`

const FlipCard = styled.div`
  perspective: 1000px;
  margin: 10px;

  p {
    color: hsl(237, 18%, 59%);
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`

const Card = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform-origin: center bottom;
  animation: ${flipDown} 0.6s;
  margin-bottom: 30px;
`

const CardFront = styled.div`
  font-family: "Red Hat Text", sans-serif;
  font-size: 80px;
  color: hsl(345, 95%, 68%);
  position: absolute;

  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 7px 11px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background: rgb(44, 45, 68);
  color: hsl(345, 95%, 68%);
  );

`

const CardBack = styled(CardFront)`
  transform: rotateX(180deg);
  background-color: red;
  width: 100%;
  height: 100%;

  // Add more styling for the back of the card
`

export { Container, FlipCard, Card, CardFront, CardBack }
