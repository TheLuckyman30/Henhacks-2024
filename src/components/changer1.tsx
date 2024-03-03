import { useState } from "react";
import { DropFilesProps } from "./FileDragger";
import { Button } from "react-bootstrap";


export function Changer1 (props: DropFilesProps) {

    function changeText (): void {
        const sentences: string[] = props.words.split(".\n\n");
        const modifiedText = sentences.map((sentence: string): string => changeWord(sentence)).join(".\n\n");
        console.log("Modified Text:", modifiedText);
        props.setWords(modifiedText);
    }

    function changeWord (sentence: string): string {
        const words: string[] = sentence.split(" ");
        return words.map((word: string): string => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(" ");
    }

    return (<div><Button onClick={changeText} disabled={props.words === ""}>Make Uppercase</Button></div>)
}