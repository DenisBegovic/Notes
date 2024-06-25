import React from "react";
import PocketBase from "pocketbase";
import EditForm from "@/Components/EditForm";


async function getNote(id: string) {
    const pb = new PocketBase(`http://127.0.0.1:8090/`);
    const record = await pb.collection("notes").getOne(id);
    return record;
}

export default async function EditNotePage({ params }: { params: { noteID: string } }) {
    const note = await getNote(params.noteID);
    console.log(note.content);
    return <h1 className="children">
        <EditForm note={{ title: note.title, content: note.content }} />
    </h1>
}