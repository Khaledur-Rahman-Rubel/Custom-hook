import "./App.css";
import AddData from "./Hooks/CustomHook/AddData";
import DataFetch from "./Hooks/CustomHook/DataFetch";

function App() {
  return (
    <>
      <DataFetch />
      <AddData />
    </>
  );
}

export default App;
