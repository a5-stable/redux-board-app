import './App.css';
import { useSelector } from "react-redux";

function App() {
  // access to slice
  const postList = useSelector((state) => state.posts.value)
  return (
    <div className="App">
      <h1>掲示板</h1>
      <div className="addPost">
        <input type="text" placeholder='your name'/>
        <input type="text" placeholder='your post'/>
        <button>投稿</button>
      </div>
      <div className='displayPosts'>
        {postList.map((post) => (
          <>
            <div key={post.id} className='post'>
              <h1>{post.name}</h1>
              <p className='postContent'>{post.content}</p>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
