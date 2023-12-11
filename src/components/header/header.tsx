import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";
import MobileMenu from "../mobile-menu/mobileMenu";

// import ThemeSelect from "./ThemeSelect";
// import LanguageSelect from "./LanguageSelect";

export default function Header() {
    return (
        <header className="z-10 sticky top-0 p-2 bg-white dark:text-neutral-200 dark:bg-black">
            <nav className="lg:max-w-5xl 2xl:max-w-7xl mx-auto md:px-6 flex justify-between">
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

             <MobileMenu />
            </nav>
        </header >
    )
}
