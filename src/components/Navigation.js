import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPizzaSlice } from 'react-icons/fa';
import { BsFillCartDashFill } from 'react-icons/bs';
import { CgProfile} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';


function Navigation() {

  let itemCount = useSelector((state) => state.cart)
  
  const name = sessionStorage.getItem('name')

  const navigate = useNavigate();

  //function for logout
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/logout')
  }


  return <>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" >
        <Container>
          <Navbar.Brand className='text-white navbar-title me-5' onClick={() => navigate('/menu')}>
            <FaPizzaSlice style={{ color: '#BB2D3B' }} />
            {' '}
            Pizza-hot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className='me-auto'>
            </Nav>
            <div className='me-3 p-2'>
              <Button variant="danger" onClick={() => navigate('/cart')}>Cart < BsFillCartDashFill />
                <div className="badge bg-white text-success position-absolute"
                  style={{ top: "10px" }}
                >
                  {itemCount.cartTotalQuantity}
                </div>
              </Button>
            </div>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                 <CgProfile/>   { name }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={()=>navigate('/orders')}>Orders</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  </>
}

export default Navigation;
