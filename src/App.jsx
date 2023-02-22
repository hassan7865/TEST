
import './App.css';
import axios from 'axios'
function App() {
  const handleClick = async()=>{
    const res = await axios.get("https://puce-glorious-chiton.cyclic.app/data",{withCredentials:true})
    console.log(res)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
