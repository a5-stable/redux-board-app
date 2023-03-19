import './App.css';
import { useSelector } from "react-redux";

function App() {
  // access to slice
  const postList = useSelector((state) => state.posts.value)
  return (
    <div className="App">
    </div>
  );
}

export default App;
