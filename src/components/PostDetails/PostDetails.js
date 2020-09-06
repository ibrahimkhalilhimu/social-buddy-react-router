import React,{ useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './PostDetails.css'
import Comment from '../Comment/Comment';

 
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



const PostDetails = () => {

    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
    let {id} =useParams(); 
    const [details,setDetails] = useState([])
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> 
            setDetails(data)) 
    },[])

    const [comment,setComment] = useState([])
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> 
            setComment(data)) 
    },[])

   
    
    return (
        <div className=''>
            <div className='detailsStyle'>
            <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Post Id: {id}
        </Typography>
        <Typography variant="h6" component="h3">
        Post Title:{details.title}
        </Typography>
        <Typography variant="h5" component="h2">
        Post :{details.body}
        </Typography>
      </CardContent>
    </Card>
         </div>
         <div > 
        <h3>Comments: {comment.length}</h3>
          {
              comment.map(comment =><Comment comment={comment} key={comment.id}>
               
              </Comment>)
           
          }
      
        
         </div>
      </div>
    );
};

export default PostDetails;

// <h3>Post Id: {id}</h3>
// <h4>Post Title: {details.title}</h4>
// <h5>Post: {details.body}</h5>