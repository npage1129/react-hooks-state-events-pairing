import video from "../data/video.js";
import Header from "./Header";
import Likes from "./Likes";
import Dislikes from "./Dislikes";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header/>
      <Likes/> <Dislikes/>
      <Comments/>
    </div>
  );
}

export default App;
