import { useState } from "react";
import Comment from "./comment";

function Post({id , title , body}){

 const [comment , setComment] = useState([]) ;


 function handleClick(){

    if ( comment.length > 0 ) 
    {
        setComment([]) ;
        return ; 
    }


    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
    .then(data => {
        setComment(data) ;
    })
 }

    return (
        <div className=" bg-white p-4 shadow-md rounded-md" onClick={handleClick}>
            <h1 className=" text-sm">{id}</h1>
          <h2 className=" text-2xl font-semibold text-gray-950">{title}</h2>
          <p className=" mt-4 text-gray-700">{body}</p>

         <hr className=" mt-4" />

         <div className=" grid gap-4">
         {comment.map(index => <Comment key={index.id} name = {index.name} email = {index.email}  body = {index.body}/>)}
         </div>


        </div>
    )
}
export default Post ;