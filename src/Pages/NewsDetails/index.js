import React, { Component } from 'react';
import Details from './Details'
import  CategoryCard  from '../../components/Card/CategoryCard'
import data from '../../Data/newsapi.json'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default class Index extends Component {
  render() {
    const categories = data.sourceCategory
    return (
      <div> 
      <Container>
        <Details/>
      </Container>
      <Container>
      <Row style={{marginTop:'10px',marginLeft:'3px'}}>
                <Col xs={5} >
                  <h3><b>Related Topic</b></h3>
                </Col>
             </Row>
            <Row>
            {categories.map((category,index)=>(
                index<=2 &&
                <div className="col-lg-4 mb-4">
                 <CategoryCard 
                  name={category.name}
                  index={index}
                /> 
            </div>     
            ))
       }
            </Row>
            </Container>
       </div>
    );
  }
}
