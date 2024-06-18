import Link from "next/link";

export default function NavBarComponent( {title, link}: {
    title : string,
    link: string
}) {
    return <div className="nav-component">
        <Link href={link}>{title}</Link>
    </div>
}