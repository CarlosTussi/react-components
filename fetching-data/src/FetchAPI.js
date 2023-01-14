import { useEffect, useState } from "react"



const withFetchAPI = (WrappedComponent) => {
    return(props) => {

        const [data, setData] = useState([]);

        useEffect(() => {
            fetch(props.url)
                .then((response) => response.json())
                .then((jsonData) => setData(jsonData))
                .catch((error) => console.log(error));

        },[data, props.url])

        return <WrappedComponent {...props} data={data} />
    }
}