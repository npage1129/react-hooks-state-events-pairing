import React, {useState} from "react";

function Dislikes(){
    const [dislikes, setDislikes] = useState(0);
    function handleDislikes(){
        setDislikes((dislikes => dislikes + 1))
    }
    return(
<button onClick={handleDislikes}>{dislikes} 👎</button>
    )
}

export default Dislikes;