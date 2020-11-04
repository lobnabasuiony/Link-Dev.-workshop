 import React, { Component } from 'react'
 import Carousel from 'react-bootstrap/Carousel'
 import img1 from'../../assets/Images/img1.jpg'
 import Button from 'react-bootstrap/Button'
import { Typography } from '@material-ui/core'

 export default class Slider extends Component {
     render() {
        let items=[]
        for (let index = 0; index < 3; index++) {
        items.push(
            <Carousel.Item key={index} wrap='true'>
            <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            />
         <Carousel.Caption>
                <p style={{fontSize:"2vw"}}><b>AI Foundation</b></p>
                <p style={{fontSize:"1.5vw"}}>is Focused On Inspiring the next generation of kids<br/>
                    HealthCare professtionals.</p>
                    <Button className='greenbtn'>Donate Now</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
        )
        }
      
         return (
             <div>
                <Carousel >
                {items}
               </Carousel> 
            </div>
           
         )
     }
 }
 
