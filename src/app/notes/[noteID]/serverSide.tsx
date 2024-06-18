import PocketBase from "pocketbase";

export async function getNote(noteID: string) {
    console.log(noteID);
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteID}`);
    const data = await res.json();
    return data?.items;
}

export async function pachNote(newData: { title: string, content: string }) {

}

