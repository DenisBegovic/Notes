"use client";
import { useState } from "react";


export default function InputForm({ handleSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    return <form className="form" onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(title, content);
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