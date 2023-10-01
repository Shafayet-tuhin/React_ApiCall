function Comment( { name , email , body }){
    return (
      <>
             <h1 className=" text-red-400 text-xl mt-4 "> Comment :  </h1>
        <div className=" bg-gray-200 border rounded-md p-4" >
        <h3> {name} - {email}</h3>
        <p>{body}</p>

        </div>
      </>
    )
}

export default Comment ; 
