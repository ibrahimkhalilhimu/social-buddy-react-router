import React from 'react';
import './Post.css'
import Button from '@material-ui/core/Button';
 import {Link,useHistory} from 'react-router-dom';
 
 import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
 

const Post = (props) => {
    
    const {id,title} = props.post;

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const history = useHistory();
    const handleClick =(id)=>{
      history.push(`/details/${id}`)
    }
   
   
    
    return (
      <Card className={classes.root} id='card' >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Post Id: {id}
        </Typography>
        <Typography variant="h5" component="h2">
        Post Title:{title}
        </Typography>
        <Button onClick={()=>handleClick(id)}variant="contained" color="secondary">
        Post Details
      </Button>
      </CardContent>
      
     
    <hr></hr>
    </Card>
    );
};

export default Post
