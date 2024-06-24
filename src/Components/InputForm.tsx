"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function InputForm({ handleSubmitEvent }: any) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    return <form className="add-note-form" onSubmit={(event) => {
        event.preventDefault();
        handleSubmitEvent(title, content);
        router.refresh();
        setTitle("");
        setContent("");
    }}>
        <input type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} placeholder="Title" required />

        <textarea value={content} onChange={(event) => { setContent(event.target.value) }}></textarea>
        <button type="submit">Create new note</button>
    </form>
}