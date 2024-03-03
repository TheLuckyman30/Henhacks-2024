import React, { useState } from "react";
import "./App.css";
import { DropFile } from "./components/FileDragger";
import { MakeUppercase } from "./components/MakeUppercase";
import { MakeLastUpper } from "./components/MakeLastUpper";
import { LetterSpacing } from "./components/LetterSpacing";
import { AddNewLine } from "./components/AddNewLine";

function App() {
  const [isDragOver, setisDragOver] = useState<boolean>(false);
  const [file, setFile] = useState<File[]>([]);
  const [words, setWords] = useState<string>("");

  return (
    <div>
      <div className="App-header" style={{ justifyContent: "flex-start" }}>
        <MakeUppercase
          isDragOver={isDragOver}
          setIsDragOver={setisDragOver}
          file={file}
          setFile={setFile}
          words={words}
          setWords={setWords}
        ></MakeUppercase>
        <MakeLastUpper
          isDragOver={isDragOver}
          setIsDragOver={setisDragOver}
          file={file}
          setFile={setFile}
          words={words}
          setWords={setWords}
        ></MakeLastUpper>
        <LetterSpacing></LetterSpacing>
        <AddNewLine
          isDragOver={isDragOver}
          setIsDragOver={setisDragOver}
          file={file}
          setFile={setFile}
          words={words}
          setWords={setWords}
        ></AddNewLine>
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
          id="The-words"
        >
          {words}
        </p>
      </div>
    </div>
  );
}

export default App;
