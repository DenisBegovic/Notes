import { getNote, pachNote } from "./serverSide";
import { useState } from "react";
import EditForm from "./EditForm";

export default async function NoteEditPage({ params }: {
    params: { noteID: string }
}) {

    const data = await getNote(params.noteID);
    console.log(data);


    return <div className="children">
        <EditForm data={data ? data : { title: "Noting found", content: "Fuck dis", id: "diznuts0901" }} />
    </div>
}