import { DragEvent, useState } from "react";

export function DropFile () {
    const [isDragOver, setisDragOver] = useState<boolean>(false);
    const [file, setFile] = useState<File[]>([]);
    const [words, setWords] = useState<string>("");

    function handleDragOver (event: DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setisDragOver(true);
    }

    function handleDragLeave (event: DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setisDragOver(false);
    }

    function handleDrop (event: DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setisDragOver(false);

        const userFiles = Array.from(event.dataTransfer.files);
        setFile(userFiles);

        let accumWords: string = "";

        userFiles.forEach((file: File) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                if (typeof(reader.result) === "string") {
                    setWords(reader.result);
                }
            };

            reader.onerror = () => {
                console.error("There was an issue.")
            };

            reader.readAsText(file);
            return reader
        });
    }

    return (<div><div 
        onDragOver={handleDragOver} 
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
            margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", height: "50px", width: "300px", border: "1px dotted", backgroundColor: isDragOver ? "lightgray" : "white", color: "black"}}>Drag files</div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", textAlign: "center"}}><p>{words}</p></div></div>)
}