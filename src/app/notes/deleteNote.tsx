import Pocketbase from "pocketbase";

export default async function deleteNote(noteID: string) {
    console.log(noteID);
    const pb = new Pocketbase("http://127.0.0.1:8090");
    const res = await pb.collection("notes").delete(noteID);
    console.log(res);
} 