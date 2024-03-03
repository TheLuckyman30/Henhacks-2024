import { Button } from "react-bootstrap";
import { DropFilesProps } from "./FileDragger";

export function AddNewLine (props: DropFilesProps) {

    function addLine () {
        const sentences = props.words.split(".");
        const newLines = sentences.map((senetence: string): string => senetence + ".\n").join("");
        props.setWords(newLines);
        
    }

    return <Button onClick={addLine}>Add a new Line</Button>
}