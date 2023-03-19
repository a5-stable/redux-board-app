import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from './features/Posts';
import { useState } from 'react';

function App() {
  // access to slice
  const postList = useSelector((state) => state.posts.value);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addPost({
      id: postList.length, // hack
      name: name,
      content: content,
    }))
  }
  const handleDeleteClick = (id) => {
    dispatch(deletePost({ id: id }))
  }

  return (
    <div className="App">
      <h1>掲示板</h1>
      <div className="addPost">
        <input type="text" placeholder='your name' onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='your post' onChange={(e) => setContent(e.target.value)}/>
        <button
          onClick={() => handleClick()}>投稿</button>
      </div>
      <div className='displayPosts'>
        {postList.map((post) => (
          <>
            <div key={post.id} className='post'>
              <h1>{post.name}</h1>
              <p className='postContent'>{post.content}</p>
              <button
                onClick={() => handleDeleteClick(post.id)}>削除</button>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
