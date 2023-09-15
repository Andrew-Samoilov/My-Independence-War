import Link from "next/link"

interface MainMenuProps {
    onClickFunction?: any;
    styleNav?: string;
    styleUL?: string;
    styleMenuItem?: string;
}

export default function MainMenu({ styleNav, styleUL, styleMenuItem, onClickFunction }: MainMenuProps) {

    return (
        <nav className={styleNav}>
            <ul className={styleUL}>
                <li className={styleMenuItem}
                    onClick={onClickFunction}>
                    <Link href="/time-line">Time line</Link>
                </li>
                {/* <li className={styleMenuItem} onClick={onClickFunction}>
                    <Link href="/map-view">Map view</Link>
                </li> */}
                <li className={styleMenuItem} onClick={onClickFunction}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styleMenuItem} onClick={onClickFunction}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
