import React, { useState } from "react";
import "./App.css";
import { DropFile } from "./components/FileDragger";
import { Changer1 } from "./components/changer1";

function App() {
  const [isDragOver, setisDragOver] = useState<boolean>(false);
  const [file, setFile] = useState<File[]>([]);
  const [words, setWords] = useState<string>("");

  return (
    <div>
      <div className="App-header" style={{ justifyContent: "flex-start" }}>
        <Changer1
          isDragOver={isDragOver}
          setIsDragOver={setisDragOver}
          file={file}
          setFile={setFile}
          words={words}
          setWords={setWords}
        ></Changer1>
        <DropFile
          isDragOver={isDragOver}
          setIsDragOver={setisDragOver}
          file={file}
          setFile={setFile}
          words={words}
          setWords={setWords}
        ></DropFile>
        <p
          style={{ display: "flex", whiteSpace: "pre-line", fontSize: "20px" }}
        >{words}
        </p>
      </div>
    </div>
  );
}

export default App;
