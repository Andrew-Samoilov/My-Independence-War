import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";
import ThemeSelect from "./ThemeSelect";
import LangSelect from "./LangSelect";

export default function Header() {
    return (
        <header className="flex justify-between bg-gray-300 p-2 dark:bg-neutral-600 dark:text-neutral-200 ">
            <Logo />

            <MainMenu
                styleUL="grid grid-cols-2 gap-8"
            />
            <ThemeSelect />
            <LangSelect />

            <button>Mobile menu</button>
        </header >
    )
}
