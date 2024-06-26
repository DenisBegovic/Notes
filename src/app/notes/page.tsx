import Note from "../../Components/Note";
import NoteForm from "../../Components/InputForm";
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
}

async function deleteNote(noteID: string) {
    "use server";
    console.log(noteID);
    const pb = new PocketBase("http://127.0.0.1:8090");
    const res = await pb.collection("notes").delete(noteID);
    console.log(res);
}

async function collectFormData(title: string, content: string) {
    "use server";
    addNote(title, content);
}

async function editNote(title: string, content: string, id: string) {
    "use server";
    const pb = new PocketBase('http://127.0.0.1:8090');
    const result = await pb.collection("notes").update(id, {
        title,
        content
    });
    console.log(result);
}

export default async function NotesPage() {
    const data = await getNotes();

    return <div className="children">
        <h1>Notes</h1>
        <div className="notes-area">
            {data?.map((note) => {
                return <Note key={note.id} note={note} deleteNote={deleteNote} editNote={editNote} />
            })}
        </div>
        <NoteForm handleSubmitEvent={collectFormData} />
    </div>
}
