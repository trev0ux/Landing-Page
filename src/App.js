import React from 'react';
import Header from './components/headerComponent/header';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsSection from './components/tabs';
import {Line, Line2, Line3} from './components/textSection'
import { createGlobalStyle } from "styled-components";
import Downloads from './components/downloads'
import { Container } from 'react-bootstrap';




const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap');
  }
`


function App() {
  return (
    <div>
        <GlobalStyles />
        <Header></Header>
        <Container>
        <Home></Home>
        <Line />
        <TabsSection />
        <Line2 />
         <Downloads />
        <Line3 /> 
        </Container>
    </div>
  );
}

export default App;
