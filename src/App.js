import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addPost } from './features/Posts';

function App() {
  // access to slice
  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(addPost({
      id: 0,
      name: "test",
      content: "teststs",
    }))
  }

  return (
    <div className="App">
      <h1>掲示板</h1>
      <div className="addPost">
        <input type="text" placeholder='your name'/>
        <input type="text" placeholder='your post'/>
        <button
          onClick={(e) => handleClick()}>投稿</button>
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
