'use client'
import { useState } from "react";
import EditNoteButton from "./Edit";

type Note = {
    id: string,
    title: string,
    content: string,
    created: string
}

type DeleteFunction = (id: string) => void;


export default function Note({ note, deleteNote }: { note: Note, deleteNote: DeleteFunction }) {
    const [mouseIsOver, setMouseIsOver] = useState(false);

    const { id, title, content, created } = note || {};

    return <div className="card" onMouseOver={() => setMouseIsOver(true)} onMouseLeave={() => setMouseIsOver(false)}>
        <div className="title-area">
            <h3>{title}</h3>
            {mouseIsOver && <button className="delete-btn" onClick={() => { deleteNote(id) }}>Delete</button>}
        </div>
        <hr></hr>
        <p>{content}</p>
        {mouseIsOver && <EditNoteButton noteID={id} />}
    </div>
}