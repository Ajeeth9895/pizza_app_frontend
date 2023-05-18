import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPizzaSlice } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();

  return <>

    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" >
        <Container>
          <Navbar.Brand className='text-white navbar-title me-5' onClick={() => navigate('/home')}>
            <FaPizzaSlice style={{ color: '#BB2D3B' }} />
            {' '}
            Pizza-hot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className='me-auto'>
            </Nav>
            <Nav>
              <Nav.Link className='text-white me-3' href="#contact">Contact</Nav.Link>
              <Button variant='danger' onClick={() => navigate('/login')}>
                login
              </Button>
            </Nav>
          
            <div className='m-2'>
              <Button variant="danger" onClick={() => navigate('/signUp')} >Sign up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  </>
}

export default Dashboard;
