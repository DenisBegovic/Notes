'use client'
import { useState } from "react";
import deleteNote from "@/app/notes/deleteNote";
import EditNoteButton from "./Edit";


export default function Note({ note }: any) {
    const { id, title, content, created } = note || {};

    const [mouseIsOver, setMouseIsOver] = useState(false);

    return <div className="card" onMouseOver={() => setMouseIsOver(true)} onMouseLeave={() => setMouseIsOver(false)}>
        <div className="title-row">
            <h3>{title}</h3>
            {mouseIsOver && <button className="delete-btn" onClick={() => { deleteNote(id) }}>X</button>}
        </div>
        <hr></hr>
        <p>{content}</p>
        {/* {mouseIsOver && <EditNoteButton noteID={id} />} */}
    </div>
}