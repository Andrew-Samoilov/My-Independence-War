import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";

export default function Footer() {
    return (
        <footer className="bg-gray-300 p-2 grid grid-cols-4 gap-2">
            <Logo />
            <MainMenu
                styleUL="grid grid-cols-1 gap-2"
            />
            <p>- footer -</p>
        </footer>
    )
}
