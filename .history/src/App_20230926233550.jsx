
import "./App.css";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="app">
      {Loading && "loading"}
      <div className="contianer">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
