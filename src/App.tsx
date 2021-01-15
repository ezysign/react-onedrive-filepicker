import React from "react";

import { ReactOneDrivePicker } from "./components";

function App() {
  return (
    <div className="App">
      <ReactOneDrivePicker
        clientID="c3e71009-3dd7-4fc8-9127-2de5ac14c89f"
        action="share"
        multiSelect={true}
        onSuccess={(result) => {
          console.log(result);
        }}
        onCancel={(result) => {
          console.log(result);
        }}
      />
    </div>
  );
}

export default App;
