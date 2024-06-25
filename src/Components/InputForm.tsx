"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from "@/Components/newNote.component.module.css";

export default function InputForm({ handleSubmitEvent }: any) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    return <form className={styles.form} onSubmit={(event) => {
        event.preventDefault();
        handleSubmitEvent(title == "" ? "Untitled" : title, content);
        router.refresh();
        setTitle("");
        setContent("");
    }}>
        <input className={styles.title} spellCheck="false" type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} placeholder="Title" />
        <textarea className={styles.content} spellCheck="false" value={content} onChange={(event) => { setContent(event.target.value) }}></textarea>
        <button className={styles.submitButton} type="submit">Create new note</button>
    </form>
}