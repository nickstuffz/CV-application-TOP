import Sidebar from "./components/Sidebar.jsx";
import Document from "./components/Document.jsx";

function App() {
  return (
    <div className="flex w-screen justify-around">
      <Sidebar />
      <Document />
    </div>
  );
}

export default App;
