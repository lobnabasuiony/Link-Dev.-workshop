import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '35%', 
  },
}));

const NewsDetailsCard=(props)=>{
  const classes = useStyles();


  return (
    <Card className={classes.root} key={props.id}>
      <CardMedia
        className={classes.media }
        image={props.img}
      />
       <CardActions disableSpacing>
           <div>Category Name</div>
            <IconButton aria-label="add to favorites" className='CustomIconBtn' >
            <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="share" className='greenColor'>
            <ShareIcon />
            </IconButton>
      </CardActions>
      <CardHeader
      className="customCardHeader"
        title={<b>{props.title}</b>} />
      <CardContent className="justify">
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}  
        </Typography>
      </CardContent>
    </Card>
  );
}
 export default withRouter(NewsDetailsCard)