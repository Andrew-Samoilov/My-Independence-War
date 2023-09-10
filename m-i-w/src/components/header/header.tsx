import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";

export default function Header() {
    return (
        <header className="flex justify-between bg-gray-300 p-2">
            <Logo/>
     
            <MainMenu
                styleUL="grid grid-cols-2 gap-8"
            />
            <button>Mobile menu</button>
        </header >
    )
}
