import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";
import ThemeSelect from "./ThemeSelect";
import LanguageSelect from "./LanguageSelect";

export default function Header() {
    return (
        <header className="flex justify-between bg-gray-300 p-2 dark:bg-neutral-600 dark:text-neutral-200 ">
            <Logo />

            <MainMenu
                styleNav='hidden sm:block'
                styleUL="grid grid-cols-3 gap-8"
            />
            <ThemeSelect
                styleSelectTheme='hidden sm:block'
            />
            <LanguageSelect
                styleSelectLanguage='hidden sm:block'
            />

            <button className="sm:hidden">Mobile menu</button>
        </header >
    )
}
