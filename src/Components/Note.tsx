'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from "@/Components/note.component.module.css";
import TextareaAutosize from 'react-textarea-autosize';

type Note = {
    id: string,
    title: string,
    content: string,
    created: string
}

type DeleteFunction = (id: string) => void;
type EditFunction = (title: string, content: string, id: string) => void;


export default function Note({ note, deleteNote, editNote }: { note: Note, deleteNote: DeleteFunction, editNote: EditFunction }) {
    const router = useRouter();
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    // const { id, title, content, created } = note || {};

    function handleDelete(id: string) {
        deleteNote(id);
        router.refresh();
    }

    function handleSubmit() {
        console.log(title, content);
        setEditMode(false)
        editNote(title, content, note.id);
        router.refresh();
    }

    return <div className={`${styles.card}`}>
        <div className={styles.titleArea}>
            <div className={styles.firstClump}>
                <h4 spellCheck="false" className={`${styles.title} ${editMode && styles.editModeStyle}`} contentEditable={editMode} onBlur={e => setTitle(e.currentTarget.innerText)}>{title}</h4>
                <p className={styles.edit} onClick={() => setEditMode(!editMode)}>{editMode ? "Close" : "Edit"}</p>
            </div>
            <div className={styles.secondClump}>
                <button className={styles.deleteBtn} onClick={() => { handleDelete(note.id) }}>Delete</button>
                {editMode && <p className={styles.edit} onClick={handleSubmit}>Submit</p>}
            </div>
        </div>
        <p spellCheck="false" className={`${styles.content} ${editMode && styles.editModeStyle}`} contentEditable={editMode} onBlur={e => setContent(e.currentTarget.innerText)}>{content}</p>

    </div>
}