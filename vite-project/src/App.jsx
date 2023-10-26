import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Document from "./components/Document.jsx";
import SavePDF from "./components/SavePDF.jsx";
import { defaultData } from "./assets/defaultData.js";

function App() {
  const [data, setData] = useState(defaultData);

  function handleChange(event, id) {
    const inputValue = event.target.value;
    const newData = { ...data };
    newData[id] = inputValue;
    setData(newData);
    console.log(newData);
  }

  return (
    <div className="flex h-screen w-screen gap-40">
      <Sidebar handleChange={handleChange} />
      <Document data={data} />
      <SavePDF />
    </div>
  );
}

export default App;
