import logo from './logo.svg';
import './App.css';
import CanvasDraw from "react-canvas-draw";

function App() {
  return (
    <div className="App">
      <header className="text-center">
        <h1>Signature App</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto">
            <CanvasDraw />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
