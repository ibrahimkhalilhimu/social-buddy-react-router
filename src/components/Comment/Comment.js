import React,{ useState, useEffect} from 'react';
import './Comment.css'
import { useParams } from 'react-router-dom';

const Comment = (props) => {
    console.log(props);
    
    
    const {name,email,body} = props.comment;

    let {id} = useParams()

   
    const [image,setImage] = useState([])

    useEffect(()=>{
        let url =`https://jsonplaceholder.typicode.com/albums/${id}/photos`
        
        fetch(url)
        .then(res=>res.json())
        .then(data=> 
            setImage
            (data)) 
    },[])

    return (
        <div className="commentStyle">
            <div>

         {
             image.map(image=><img style={{width:"80px", borderRadius: "50%"}} src={image.url} key={image.id}/>).slice(0,1)
         }   

         </div>
         <div className="textStyle">

     <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Comment: {body}</p>
    </div>
        </div>
    );
};

export default Comment;