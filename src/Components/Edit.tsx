'use client';
import { useRouter } from "next/router";
import Link from "next/link";

export default function EditNoteButton({ noteID }: { noteID: string }) {
    console.log(noteID);
    return <Link href={`./notes/${noteID}`}>
        <button>Edit Note</button>
    </Link>
}