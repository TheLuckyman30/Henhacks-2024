import { DragEvent, useState } from "react";

export function DropFile () {
    const [dragging, setDragging] = useState<boolean>(false);

    function handleDragOver (event: DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setDragging(false);
    }

    function handleDragLeave (event: DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setDragging(true);
    }

    function handleDrop (event: DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setDragging(true);
    }

    return (<div></div>)
}