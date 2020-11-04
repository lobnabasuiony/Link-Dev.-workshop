import React from 'react'
import Slider from '../../components/Slider/Slider'
import  NewsReviewCard  from '../../components/Card/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';
import data from '../../Data/newsapi.json'
import img1 from'../../assets/Images/Home.png'


export default function Home() {
    let items = data.articles.filter((i=>i.showOnHomepage==true))
    return (
        <div>
            <Slider/>
            <Container> 
            <Row className="mt-4 mb-4">
                <Col xs={6} >
                    <h2><b>Latest News</b></h2>
                </Col>
                <Col xs={6}>
                    <ArrowRightAltIcon className='arrowIcon'/>
                    <Link to="/News" className='greenLink right-col'>
                            View All
                    </Link>
                </Col>
            </Row>
            <Row>
                {items.map((item,index)=>(
                      index<=5&&
                      <div className="col-lg-4 mb-4" key={item.id}>
                            <NewsReviewCard
                            id={item.id}
                            img={item.urlToImage}
                            title={item.title}
                            content={item.content}
                            date={item.publishedAt}
                            />
                        </div>
                    ))
                }
            </Row>
        </Container>
        <Container fluid>
            <Row>
            <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            />  
            </Row></Container>
        </div>
    )
}