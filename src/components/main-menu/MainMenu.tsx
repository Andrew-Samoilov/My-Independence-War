import Link from "next/link"

interface MainMenuProps {
    onClickFunction?: any;
    styleNav?: string;
    styleUL?: string;
    styleMenuItem?: string;
}

export default function MainMenu({ styleNav, styleUL, styleMenuItem, onClickFunction }: MainMenuProps) {

    let items = [
        {
            id: 1,
            text: 'Time line',
            link: '/time-line',
        },
        {
            id: 2,
            text: 'Contact',
            link: '/contact',
        },
    ];

    return (
        <nav className={styleNav}>
            <ul className={styleUL}>
                {items.map(({ id, text, link }) => (
                    <li
                        key={id}
                        className={styleMenuItem}
                        onClick={onClickFunction}>
                        <Link href={link}>{text}</Link>
                    </li>
                ))}


                {/* <li className={styleMenuItem}
                    onClick={onClickFunction}>
                    <Link href="/time-line">Time line</Link>
                </li>
                <li className={styleMenuItem} onClick={onClickFunction}>
                    <Link href="/map-view">Map view</Link>
                </li> 
                <li className={styleMenuItem}
                    onClick={onClickFunction}>
                    <Link href="/contact">Contact</Link>
                </li> */}

            </ul>
        </nav>
    )
}
