import React, {useState} from "react";

function Comments(){
const [show, setShow]= useState(null)
function handleShow(){
    setShow((show)=> !show)
}
    return (
        <div>
    <button onClick = {handleShow}>
    {show ? "Show Comments" : "Hide Comments"}
    </button>
    <hr></hr>
    <h2> {show ? "" : "2 Comments"} </h2>
    <h3> {show ? " " : "duanebot"} </h3>
    <p>{show ? " " : "first!"}</p>
    <h3>{show ? " " : "gaeron"}</h3>
    <p>{show ? " " : "What a great tutorial!"}</p>
    
</div>
    )
}
export default Comments;
