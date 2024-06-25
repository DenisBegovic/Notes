"use client";
import { useState } from "react";


interface Note {
    title: string,
    content: string,
    // created: Date,
    // updated: Date,
}

export default function EditForm({ note }: { note: Note }) {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    return <div className="edit-form">
        <input className="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input className="content" type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
        <button onClick={() => console.log(`Chenge submited: ${{ title, content }}`)}>Submit</button>
    </div>
}