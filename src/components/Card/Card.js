import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import DateRangeIcon from '@material-ui/icons/DateRange';
import moment from 'moment';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', 
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
// }));


// const NewsReviewCard=(props)=>{
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
// const handleNavigation=(id)=>{
//   props.history.state={id}
//   props.history.push("/NewsDetails");
// }
//   return (
//     <Card className={classes.root}>
//       <CardMedia
//         className={classes.media }
//         image={props.img}
//       />
//        <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites" className='iconBtn' >
//             <FavoriteBorderIcon />
//             </IconButton>
//             <IconButton aria-label="share" className='greenColor'>
//             <ShareIcon />
//             </IconButton>
//       </CardActions>
//       <CardHeader
//         title={   
//        <Link className='blackColor' onClick={()=>handleNavigation(props.id)}>
//        {props.title}
//       </Link>}
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {props.content}  
//         <Link  className='greenLink'  onClick={handleExpandClick}>
//           read More
//         </Link>
//         </Typography>
//       </CardContent>
//       <CardHeader
//         subheader={<span><DateRangeIcon className='greenColor'/>{moment(props.date).format("DD-MM-YYYY")}</span>}
//       />
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>
//               {props.content}
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
//  export default withRouter(NewsReviewCard)



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const NewsReviewCard=(props)=>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const handleNavigation=(id)=>{
  props.history.state={id}
  props.history.push("/NewsDetails");
}
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.img}
        title={   
            <Link className='blackColor' onClick={()=>handleNavigation(props.id)}>
            {props.title}
          </Link>}
      />
       <CardActions disableSpacing>
           <IconButton aria-label="add to favorites" className='iconBtn' >
           <FavoriteBorderIcon />
            </IconButton>
           <IconButton aria-label="share" className='greenColor'>
           <ShareIcon />
           </IconButton>
      </CardActions>
      <CardHeader
        title={   
       <Link className='blackColor' onClick={()=>handleNavigation(props.id)}>
       {props.title}
      </Link>}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.content}  
        <Link  className='greenLink'  onClick={handleExpandClick}>
         read More
        </Link>
        </Typography>
      </CardContent>
      <CardHeader
        subheader={<span><DateRangeIcon className='greenColor'/>{moment(props.date).format("DD-MM-YYYY")}</span>}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      `<CardContent>
        <Typography paragraph>
            {props.content}
        </Typography>
      </CardContent>`
      </Collapse>
    </Card>
  );
}
export default withRouter(NewsReviewCard)
