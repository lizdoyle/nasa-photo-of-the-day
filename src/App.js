import React, {useState} from "react";
import "./App.scss";


import NasaCard from './components/NasaCard/NasaCard';



function App() {
  const [card, setCard] = useState('');
  console.log(card, setCard);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
      <NasaCard  />
    </div>
  );
}

export default App;
