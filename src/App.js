import React from 'react'
import './App.css';
import CanvasDraw from "react-canvas-draw";

function App() {
  const [savedImage, updateSaved] = React.useState(false)
  const canvas = React.useRef(null)
  const onClearClick = (event) => {
    console.log("CLICKED")
    canvas.current.clear()
  }

  const onSaveClick = (event) => {
    // const saveData = canvas.current.getSaveData();
    const saveData = canvas.current.getDataURL('png', false, "#ffffff")
    updateSaved(saveData)
  }

  return (
    <div className="App">
      <header className="text-center">
        <h1>Signature App</h1>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" onClick={onClearClick} className="btn btn-danger">Clear</button>
          <button type="button" onClick={onSaveClick} className="btn btn-primary">Save</button>
        </div>
        <textarea className={"form-control"} value={savedImage} rows="2"></textarea>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto">
            <CanvasDraw
              ref={canvas}
              canvasWidth={1200}
              canvasHeight={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
