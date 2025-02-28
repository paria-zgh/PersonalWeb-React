import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/contact';
import { Skills } from './pages/Skills';
import { Carousel } from './components/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const components = [Home,About, Skills,Contact];
  return (
    <div className='App'>
      <div>

        <Header setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
      </div>
      <Container>
        <Row   >
<Col md={6} >
<Carousel
        components={components}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      
        >

   </Carousel>

      </Col>

          </Row>
         
      
          </Container>

          
            <Footer/>
    </div>
  );
};



export default App;
