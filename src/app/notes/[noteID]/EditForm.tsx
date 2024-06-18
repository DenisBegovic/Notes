'use client';
import { useState } from "react";



export default function EditForm({ data }: { data: { title: string, content: string, id: string } }) {
    const { title, content, id } = data;
    console.log(data);
    const [newTitle, setTitle] = useState("");
    const [newContent, setContent] = useState("");


    return <form className="edit-form">
        <label>Title</label>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        <label>Content</label>
        <textarea value={content} onChange={(event) => setContent(event.target.value)} />
        <button>Submit Changes</button>
    </form>
}