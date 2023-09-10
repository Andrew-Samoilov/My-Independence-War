import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";

export default function Header() {
    return (
        <header className="flex justify-between bg-gray-300 p-2 dark:bg-neutral-600 dark:text-neutral-200 ">
            <Logo/>
     
            <MainMenu
                styleUL="grid grid-cols-2 gap-8"
            />
            <button>Mobile menu</button>
        </header >
    )
}
