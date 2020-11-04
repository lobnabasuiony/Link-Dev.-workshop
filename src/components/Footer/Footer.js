import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => {
  return (
      <div>
    <footer className='footer mt-auto py-3 footer-container text-black bgColor'>
    <div className='container'>
    <Row>
                    <Col className="col-lg-2" > 
                          <ul>
                              <li>News</li>
                              <li>Events</li>
                              <li>About</li>
                              <li>FAQS</li>
                          </ul>
                      </Col>
                      <Col className="col-lg-2" >
                      <ul>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                        <li>Complains</li>
                          </ul>
                      </Col>
                      <Col className="col-lg-4">
                          <label>Subscribe To NewsLetters</label>
                          <Form.Group as={Row} controlId="formPlaintextEmail" >
                          <Form.Control type="text" placeholder="Email Address"/>
                          <Button className='btn greenbtn'>Subscribe</Button>{' '}
                          </Form.Group>
                      </Col>
                      <Col className="col-lg-4" >
                          <span className="ml-5">follow us on </span>
                          
                         <br/>
                          <ul className="social-media-icons">
                              <li><InstagramIcon size="small"/></li>
                              <li><LinkedInIcon size="small"/></li>
                              <li><FacebookIcon size="small"/></li>
                              <li><TwitterIcon size="small"/></li>
                          </ul>
                      </Col>
                      </Row>
        </div>

  </footer>
        <Navbar className="justify-content-center"  style={{backgroundColor:"#058997",color:'white'}}>
        <span><b>All Right Reserved Link Deveopment &copy; 2020.</b> </span>

  </Navbar>
  </div>
  );
}

export default Footer;