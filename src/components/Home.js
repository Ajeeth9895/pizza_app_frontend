import React from 'react';
import Dashboard from './Dashboard';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate()
  return <>
    <div className='header-home'>
      <div>
        <Dashboard />
      </div>
      <div>
        <Card className="home-banner bg-dark text-white m-2" style={{ border: 'none' }}>
          <Card.Img src="https://as2.ftcdn.net/v2/jpg/02/36/89/15/1000_F_236891523_trzBy1330uJN0PL8TP37TOmiQ0ntYA0I.jpg" height={600} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className='text-center mt-5' style={{ color: 'orange', fontSize: '4em' }}>Pizza hot</Card.Title>
            <Card.Text className='text-end ml-5' style={{ color: '	rgb(255, 230, 230)', fontSize: '3em' }}>
              Gives Delicious and hot pizza for you
            </Card.Text>
            <div className='d-flex  justify-content-center'>
              <Button variant="warning" onClick={() => navigate('/login')}>Order now{' '}<FiArrowRight /></Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div className='contact-us' id='contact'>
        <div className='text-white text-center'><h3>contact us</h3></div>
        <div className='d-flex justify-content-between m-5'>
          <div>
            <span className='text-warning'><h4 className=''>Address</h4></span>
            <p className='text-white'>Head office:<br />
              Pizza-hot,<br />
              Mg road, Bangalore,Karnataka-560042
            </p>
          </div>
          <div>
            <p className='text-white'>
              <span className='text-warning'>Mob - </span>6382862595<br />
              <span className='text-warning'>Email - </span>ajeethkumar.gopal@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Home;
