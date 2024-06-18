'use client'
import { useState } from "react";
import deleteNote from "@/app/notes/deleteNote";
import EditNoteButton from "./Edit";


export default function Note({ note }: any) {
    const [mouseIsOver, setMouseIsOver] = useState(false);

    const { id, title, content, created } = note || {};

    return <div className="card" onMouseOver={() => setMouseIsOver(true)} onMouseLeave={() => setMouseIsOver(false)}>
        <h3>{title}</h3>
        <hr></hr>
        <p>{content}</p>
        {mouseIsOver && <button className="delete-btn" onClick={() => { deleteNote(id) }}>Delete</button>}
        {mouseIsOver && <EditNoteButton noteID={id} />}
    </div>
}