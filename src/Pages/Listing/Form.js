import React, { Component } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import  { useEffect, useState } from 'react';
import data from '../../Data/newsapi.json'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 170,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function Form(props) {
    const classes = useStyles();
    const [category, setCategory] = useState('None');
    const [searchTxt, setsearchTxt] = useState('');
  
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const searcHandleChange =(event)=>{
        setsearchTxt(event.target.value);
    }
    const handelClick =()=>{debugger
        if(category>=1){
        let items = data.articles.filter(a=>a.sourceID==category)
        let searchResults=items.filter(i=>i.title.toLowerCase().match(searchTxt));
        props.getSearchResults(searchResults);
        }else{
            let searchResults=data.articles.filter(i=>i.title.toLowerCase().match(searchTxt));
            props.getSearchResults(searchResults);
        }
    }
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return (
        <Container> 
            <Row style={{marginTop:'10px'}}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="blue" href="/" >
                    Home
                    </Link>
                    <Link color="inherit" href="/News" >
                    News
                    </Link>
                </Breadcrumbs>
            </Row>
            <Row>
                <Col xs={2} >
                    <h2><b>News</b></h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-lg-2 col-md-6">
                     <label>From</label>
                     <br/>
                     <TextField
                        id="date"
                        type="date"
                        defaultValue={date}
                        variant="outlined"
                        style={{width:"95%"}}
                        className="mt-2"
                    />
                </Col>  
                <Col className="col-lg-2 col-md-6">
                <label>To</label>
                <br/>
                <TextField
                        id="date"
                        type="date"
                        defaultValue={date}
                        variant="outlined"
                        style={{width:"95%"}}
                        className="mt-2"
                    />
                </Col>  
                <Col className="col-lg-3 col-md-6">
                    <label>Category</label>
                    <br/>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                        id="demo-simple-select-outlined"
                        value={category}
                        onChange={handleChange}
                        placeholder="Select"
                        >
                        <MenuItem value={'None'}><em>None</em></MenuItem>
                        {data.sourceCategory.map((item,index)=>
                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                        )}
                        </Select>
                    </FormControl>
                </Col>  
                <Col className="col-lg-5 col-md-12">
                    <label></label>
                    <br/>
                    <TextField
                        type="text"
                        placeholder="Search Services"
                        variant="outlined"
                        style={{width:"90%"}}
                        className="mt-3"
                    
                        InputProps={{
                            endAdornment: (
                                <InputAdornment style={{color:'green'}}>
                                <IconButton className="searchIcon">
                                    <SearchIcon  />
                                </IconButton>
                                </InputAdornment>
                            )
                            }}
                        onChange={searcHandleChange}
                        /////////On Enter/////////
                        onClick={handelClick}
                        onKeyPress={function(event) {
                            if (event.which == 13) {
                                handelClick();
                            }
                          }}
                    />
                </Col>  
            </Row>
    </Container>
    );
}