import React from "react";
import logo from "./sample.svg";

function App() {
  return (
    <div id="demo">
      <h1>React One drive picker</h1>
      <p>This component is using the iframe window to open the picker.</p>
      <h2>Motivation</h2>
      <p>
        I have gone through the microsoft onedrive &nbsp;
        <a href="https://docs.microsoft.com/en-us/onedrive/developer/controls/file-pickers/react/?view=odsp-graph-online">
          documentation for react &nbsp;
        </a>
        and I tried to folow what they have mention in documentation.
        Unfortunately I havnt get luck to setup react-application with
        FileBrowser as they mentioned. My intention is to access both sharepoint
        sites and personal onedrive using same file picker.I found one simple
        implementation{" "}
        <a href="https://www.meziantou.net/using-onedrive-file-picker-in-a-website.htm">
          here
        </a>{" "}
        which seems pretty straight forward and enough for my usecase.
        <br />
        If you have any other bugs or suggestions please let us know.
      </p>
      <h2>Implementation Strategy</h2>
      <p>
        Nothing special, just add simple wrapper and exposing the callbacks from
        the picker window.
      </p>
      <h2>Demo </h2>
      <p>the following is my demo implementation </p>
      <iframe
        src="https://codesandbox.io/embed/elegant-kirch-d5wc6?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: `100% `,
          height: `500px`,
          border: 0,
          borderRadius: `4px`,
          overflow: `hidden`,
        }}
        title="elegant-kirch-d5wc6"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

      <img src={logo} alt="react-onedrive-implementation" width="450" />
      <footer>
        Made with <span style={{ color: `red` }}>❤️</span> by EzySign
        <p>
          <i className="fa fa-globe" style={{ color: `#00b4ff` }} />
          &nbsp;
          <a href="http://ezysign.cc/#contact">Web</a>
        </p>
        <p>
          <i className="fab fa-github" />
          &nbsp;
          <a href="https://github.com/ezysign">Github</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
