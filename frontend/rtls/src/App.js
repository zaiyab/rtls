import './App.css';
import Box from './boxes';
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style1.css";
function App() {
  

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to call the API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.1.113:3000/api/endpoint"); // Adjust the endpoint as per your API
        setData(response.data);
        // console.log(response)
        // console.log("hell")
        
      } catch (error) {
        setError(error.message);
      }
    };

    // Call the API every 1 second
    const interval = setInterval(fetchData, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">

<div>
      <h1>Device is in Room</h1>
      {error && <p>Error: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>


<div className="triangle-container">
<div className="rectangle-container">

<Box color={data==='a'?'green':'red'} name={"Room A"}/>
<Box color={data==='b'?'green':'red'} name={"Room B"}/>
<Box color={data==='c'?'green':'red'} name={"Room C"}/>

<Box color={data==='d'?'green':'red'} name={"Room D"}/>
<Box color={data==='e'?'green':'red'} name={"Room E"}/>
<Box color={data==='f'?'green':'red'} name={"Room F"}/>


</div>
    </div>
  </div>
  );
}

export default App;
