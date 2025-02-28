 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';

import Home from '../pages/Home';
 export const Header=(props)=> {
   return (
     <Navbar className='navbar-d' expand="lg" >
         <Navbar.Brand className='fs-3 text-warning ps-3'>Paria Zoghi</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav " />
         <Navbar.Collapse id="basic-navbar-nav " className='custom-navbar'> 
           <Nav className="me-auto ">
           <button onClick={() => {props.setActiveIndex(0)}} style={{color:props.activeIndex===0? "orange":"white"}}>Home</button>
           <button onClick={() => (props.setActiveIndex(1))} style={{color:props.activeIndex===1? "orange":"white"}}>About</button>
           <button onClick={() => {props.setActiveIndex(2)}} style={{color:props.activeIndex===2? "orange":"white"}}>Skills</button>
           <button onClick={() => {props.setActiveIndex(3)}} style={{color:props.activeIndex===3? "orange":"white"}}>Contact</button>              
           </Nav>
         </Navbar.Collapse>
     </Navbar>
   );
 }

