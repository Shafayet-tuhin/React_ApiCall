import { useEffect, useState } from 'react'
import './App.css'
import Post from './component/post'

function App() {
 

  const [posts , setPosts] = useState([]) ; 


  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>{
      setPosts(data) ;
      console.log(date) ;
    })
  },[])

  return ( 
    <div className='w-1/3 mx-auto mt-20'>
      <h1 className=' text-4xl font-bold mx-auto flex justify-center mb-4' > Posts </h1>
      <div className=' grid gap-4'>
         {posts.map(post => <Post 
         key={post.id}
         id = {post.id} 
         title={post.title}
         body={post.body}
         />)}
      </div>
    </div>
  )
}
 
export default App
 