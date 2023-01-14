import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({});
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Milan&appid=a1054f644a66eba614240cdd0ab53d28"

  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.log(error));          

},[])

  return (
    <>
        {Object.keys(data).length > 0 ? 
        <div>
          {console.log(data)}
          <h1>Status: {data.cod}</h1>
          <h2>Country Code: {data.sys.country}</h2>
          <h2>City name: {data.name}</h2>
          <h2>Humidity now: {data.main.humidity}</h2>
        </div> : 
        <div>
          <h1>Data pending...</h1>
        </div>}
    </>
    
  );
}

export default App;
