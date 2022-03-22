import React, {useState} from 'react';

function Likes (){
const [likes, setLikes] = useState(0);
function handleLikes(){
    setLikes((likes => likes + 1 ) )
}
    return(
<button onClick = {handleLikes}>{likes} 👍 </button>
    )
}
export default Likes;