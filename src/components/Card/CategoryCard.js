import React, { Component }  from "react";
import Link  from '@material-ui/core/Link';
import img from'../../assets/Images/RC1.jpg'
import img2 from "../../assets/Images/RC2.jpg"
import img3 from "../../assets/Images/RC3.jpg"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


class CategoryCard extends Component {
    render() {
  return (
        <div className="container">
           <img
            className="d-block w-100"
            src={this.props.index==0?img:this.props.index==1?img2:img3}
            height="230"
            alt="First slide"
            />
            <div className="content">  
                Category
                <h6><b>{this.props.name}</b></h6>
                <Link className='greenColor'>
                    View All
                <ArrowRightAltIcon />
                </Link>
            </div>
        </div> 
  );
  }
}
export default (CategoryCard)
  