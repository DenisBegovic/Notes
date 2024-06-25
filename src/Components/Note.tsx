'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

type Note = {
    id: string,
    title: string,
    content: string,
    created: string
}

type DeleteFunction = (id: string) => void;


export default function Note({ note, deleteNote }: { note: Note, deleteNote: DeleteFunction }) {
    const [mouseIsOver, setMouseIsOver] = useState(false);
    const router = useRouter();
    const { id, title, content, created } = note || {};

    function handleClick(id: string) {
        deleteNote(id);
        router.refresh();
    }

    return <div className="card" onMouseOver={() => setMouseIsOver(true)} onMouseLeave={() => setMouseIsOver(false)}>
        <div className="title-area">
            <div>
                <h3>{title}</h3>
                <p className="edit" onClick={() => { router.push(`/notes/${id}`) }}>Edit</p>
            </div>
            <button className="delete-btn" onClick={() => { handleClick(id) }}>Delete</button>
            {/* {mouseIsOver && <button className="delete-btn" onClick={() => { handleClick(id) }}>Delete</button>} */}
        </div>
        <hr></hr>
        <p>{content}</p>
    </div>
}