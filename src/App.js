import React from 'react';
import Header from './components/headerComponent/header';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Line from './components/textSection';
import TabsSection from './components/tabs';
import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,600,700,900&display=swap');
  body {
    font-family: 'Rubik', sans-serif;
  }
`


function App() {
  return (
    <div>
        <GlobalStyles />
        <Header></Header>
        <Home></Home>
        <Line />
        <TabsSection />
    </div>
  );
}

export default App;
