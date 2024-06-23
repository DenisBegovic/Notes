"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function InputForm({ handleSubmitEvent }: any) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    return <form className="form" onSubmit={(event) => {
        event.preventDefault();
        handleSubmitEvent(title, content);
        router.refresh();
        setTitle("");
        setContent("");
    }}>
        <label>Note title:</label>
        <input type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} />
        <label>Note content</label>
        <textarea value={content} onChange={(event) => { setContent(event.target.value) }}></textarea>
        <button type="submit">Submit</button>
    </form>
}