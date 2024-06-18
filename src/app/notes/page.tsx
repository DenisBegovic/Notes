import { useState } from "react";
import plus from "../../../public/plus.svg";
import AddNote from "../AddNote";

async function getNotes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30", {cache: "no-store"});
    const data = await res.json();
    return data?.items as any[];
} 

function addNote() {
    
}

export default async function NotesPage() {
    const data = await getNotes();

    return <div className="page">
        <h1>Notes</h1>
        <div className="note-area">
            {data?.map((note) => {
                return <Note key={note.id} note={note}/>
            })}
        </div>
        <AddNote />

    </div>
}

function Note({note}: any) {
    const {id, title, content, created} = note || {};

    return <div className="card">
        <div className="title">
            <h3>{title}</h3>
        </div>
        <hr></hr>
        <div className="content">
            <p>{content}</p>
        </div>
    </div>
}


