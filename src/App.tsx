import { useState } from "react";
import "./App.css";
import OficioCard from "./components/cards/oficioCard";

function App() {
  const [municipio, setMunicipio] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMunicipio(e.target.value);
    console.log(municipio);
  };

  return (
    <div className="App">
      <div className="upload-arquivo">Placeholder</div>
      <div className="municipio-input">
        <label htmlFor="municipio">Municipio:</label>
        <input
          type="text"
          placeholder="ex: Lucena"
          value={municipio}
          onChange={handleChange}
        />
      </div>
      <div className="cards">
        <OficioCard />
        <OficioCard />
        <OficioCard />
        <OficioCard />
      </div>
    </div>
  );
}

export default App;
