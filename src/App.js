import React from 'react';
import Header from './components/headerComponent/header';
import Home from './components/homeComponent/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsSection from './components/tabsComponent/tabs';
import {Line, Line2, Line3, Contact} from './components/textComponent/textSection';
import Asks from './components/askComponent/ask';
import Downloads from './components/downloadComponent/downloads'
import { Container } from 'react-bootstrap';
import { GlobalStyles } from './global';
import Footer from './components/footerComponent/footer';



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
            <Asks />
        </Container>
           <Contact />
           <Footer />
    </div>
  );
}

export default App;
