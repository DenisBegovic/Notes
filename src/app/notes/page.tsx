import { useState } from "react";
import plus from "../../../public/plus.svg";
import Note from "../../Components/Note";
import SubmitForm from "./AddNote";

async function getNotes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30", { cache: "no-store" });
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const data = await getNotes();

    return <div className="children">
        <h1>Notes</h1>
        <div className="notes-area">
            {data?.map((note) => {
                return <Note key={note.id} note={note} />
            })}
        </div>
        <SubmitForm handleSubmit={(title: string, content: string) => {
            console.log(title, content);
        }} />
    </div>
}




