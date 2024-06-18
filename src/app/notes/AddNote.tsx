import { useState } from "react";

export default function AddNote() {

    return <svg  className="note-add-button" width="50" height="50" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="62.5" cy="62.5" r="62.5" fill="black"/>
    <g filter="url(#filter0_d_6_11)">
    <path d="M63 25L63 100" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    </g>
    <g filter="url(#filter1_d_6_11)">
    <path d="M25 62H100" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    </g>
    <defs>
    <filter id="filter0_d_6_11" x="55" y="21" width="16" height="91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_11"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_11" result="shape"/>
    </filter>
    <filter id="filter1_d_6_11" x="17" y="58" width="91" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_11"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_11" result="shape"/>
    </filter>
    </defs>
    </svg>
    ;
}

function InputForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    return <form>
        <label>Note title:</label>
        <input type="text" value={title}/>
        <label>Note content</label>
        <textarea></textarea>
    </form>
}