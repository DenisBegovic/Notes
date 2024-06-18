"use server";

import plus from "../../../public/plus.svg";
import Note from "../../Components/Note";
import SubmitForm from "../../Components/InputForm";
import PocketBase from "pocketbase";

async function getNotes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30", { cache: "no-store" });
    const data = await res.json();
    return data?.items as any[];
}

async function addNote(title: string, content: string) {
    const data = { title, content };
    const pb = new PocketBase("http://127.0.0.1:8090");
    const record = await pb.collection('notes').create(data);
    console.log(record);
}

async function deleteNote() {

}


export default async function NotesPage() {
    const data = await getNotes();

    async function collectFormData(title: string, content: string) {
        "use server";
        addNote(title, content);
    }

    return <div className="children">
        <h1>Notes</h1>
        <div className="notes-area">
            {data?.map((note) => {
                return <Note key={note.id} note={note} />
            })}
        </div>
        <SubmitForm handleSubmitEvent={collectFormData} />
    </div>
}




