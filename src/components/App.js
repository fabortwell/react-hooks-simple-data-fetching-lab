// create your App component here
import React, {useState, useEffect} from "react"
function App() {
    const [dogPic, SetDogPic] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          SetDogPic(data.message);
          setIsLoaded(true)
        });
    }, []);
    if (!isLoaded) return <p>Loading...</p>
  
    return <img src={dogPic} alt="A Random Dog"/>;
  }
  
  export default App;
