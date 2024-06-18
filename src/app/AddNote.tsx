import Link from "next/link";

export default function AddNote() {
    return <Link className="add-button" href="/add">
        <svg width="75" height="75" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="62.5" cy="62.5" r="62.5" fill="#383838"/>
            <g filter="url(#filter0_d_6_11)">
                <path d="M63 25L63 100" stroke="white" stroke-width="8" stroke-linecap="round"/>
            </g>
            <g filter="url(#filter1_d_6_11)">
                <path d="M25 62H100" stroke="white" stroke-width="8" stroke-linecap="round"/>
            </g>
            <defs>
                <filter id="filter0_d_6_11" x="55" y="21" width="16" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_11"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_11" result="shape"/>
                </filter>
                <filter id="filter1_d_6_11" x="17" y="58" width="91" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
    </Link>
}