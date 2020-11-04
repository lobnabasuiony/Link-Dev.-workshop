import React, { Component }  from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link  from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { withRouter } from "react-router-dom";
import  NewsDetailsCard  from '../../components/Card/customCard'
import data from '../../Data/newsapi.json'

class Details extends Component {
    constructor(props) {
        super(props);
        const routedState =
          this.props.location.state != undefined
            ? this.props.location.state
            : this.props.history.state;
        this.state = {
          ...routedState,
        }
    }
    componentDidMount(){
        const {id} = this.state
        if(!id){
         this.props.history.push('/News');
        }
    }
    render() {
        const {id} = this.state
        let item
        if(id){
         item=data.articles.filter(i=>i.id==id)[0]
        }
  return (
    <Container>
         <Row style={{marginTop:'10px'}}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="blue" href="/" >
                    Home
                    </Link>
                    <Link color="inherit" href="/News" color="blue" >
                    News
                    </Link>
                    <Link color="inherit" href="/NewsDetails" >
                    NewsDetails
                    </Link>
                </Breadcrumbs>
            </Row>
            <Row>
                <Col xs={5} >
                    <h2><b>News Details</b></h2>

                </Col>
            </Row>
            <Row>
                {id&&
                <NewsDetailsCard
                 id={item.id}
                 img={item.urlToImage}
                 title={item.title}
                 content={item.content}
                 date={item.publishedAt}
                />
                }
            </Row>
         </Container>
  );
  }
  }
  export default withRouter(Details)
  