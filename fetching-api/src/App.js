import { useState, useEffect } from 'react';
/* 
IMPORTANT NOTE: Using a real external weather API.
If this code is failing, it means there is probably a problem  with the API key and not the code itself.
*/

function App() {
  const [data, setData] = useState({});
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Milan&appid=API_KEY"

  const SUCCESS = "200";
  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.log(error));          

},[])

//Validating the object response
  return (
    <>
        {Object.keys(data).length > 0 ? 
        <div>
          {data.cod == SUCCESS ? 
          <>
            <h1>Status: {data.cod}</h1>
            <h2>Country Code: {data.sys.country}</h2>
            <h2>City name: {data.name}</h2>
            <h2>Humidity now: {data.main.humidity}</h2>
          </> :
          <>
            <h1>Status: {data.cod}</h1>
            <h2>Please check API key</h2>
          </>}
          
        </div> : 
        <div>
          <h1>Data pending...</h1>
        </div>}
    </>
    
  );
}

export default App;
