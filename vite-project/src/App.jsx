import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Document from "./components/Document.jsx";

function App() {
  const [data, setData] = useState({});

  function handleChange(event, id) {
    const inputValue = event.target.value;
    const newData = { ...data };
    newData[id] = inputValue;
    setData(newData);
    console.log(newData);
  }

  return (
    <div className="flex gap-40">
      <Sidebar handleChange={handleChange} />
      <Document />
    </div>
  );
}

export default App;
