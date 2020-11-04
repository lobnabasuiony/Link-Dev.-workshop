import React, { Component } from 'react';
import Form from '../../Pages/Listing/Form';
import data from '../../Data/newsapi.json';
import  NewsReviewCard  from '../../components/Card/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import { withRouter } from "react-router-dom";

 class News extends Component {
  constructor(props) {
    super(props);
    const routedState =
    this.props.location.state != undefined
      ? this.props.location.state
      : this.props.history.state;
  this.state = {
    ...routedState,
      searchResults:[]
    }
};
  getSearchResults = (searchResults)=>{
   this.setState({searchResults:searchResults})
}
  render() {debugger
    const {searchResults} =this.state
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    return (
      <div>
         <Form getSearchResults={this.getSearchResults}/>
         <Container style={styles.contianer} >
         <Row>
            {
              searchResults.length>0?
              searchResults.map((item,index)=>(
                index<=11&&
                <div className="col-lg-4 mb-4">
                    <NewsReviewCard
                    id={item.id}
                    img={item.urlToImage}
                    title={item.title}
                    content={item.content}
                    date={item.publishedAt}
                    />
                </div>
              ))
              :
                data.articles.map((item,index)=>(
                  index<=11&&
                  <div className="col-lg-4 mb-4">
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
            <div className='margin'>
            <Pagination>
              <Pagination.Prev/>
                {items}
              <Pagination.Next />
            </Pagination>
            </div>
       </div>
    );
  }
}
export default withRouter(News)


const styles={
  contianer:{
    marginTop:'10px'
  },
  col:{
    marginBottom:'10px'
  },
}