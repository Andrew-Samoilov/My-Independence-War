import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";
// import ThemeSelect from "./ThemeSelect";
// import LanguageSelect from "./LanguageSelect";

export default function Header() {
    return (
        <header className="sticky top-0 p-2 shadow-md dark:text-neutral-200 ">
            <nav className="mx-auto md:px-6 flex justify-between">
                <Logo />

                <MainMenu
                    styleNav='hidden sm:block'
                    styleUL="grid grid-cols-2 gap-8"
                    styleMenuItem="list-none"
                />

                {/* <ThemeSelect
                    styleSelectTheme='hidden sm:block'
                /> */}

                {/* <LanguageSelect
                    styleSelectLanguage='hidden sm:block'
                /> */}

                <button className="sm:hidden">Mobile menu</button>
            </nav>
        </header >
    )
}
