
import './App.css';
import axios from 'axios'
function App() {
  const handleClick = async()=>{
    const res = await axios.get("http://localhost:8888/data")
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
