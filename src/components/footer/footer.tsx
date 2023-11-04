import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";
import Contacts from "../contacts/Contacts";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-center sm:text-left bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 p-2">
            <div className="lg:max-w-5xl 2xl:max-w-7xl mx-auto grid gap-2 sm:gap-6 md:px-6 sm:grid-rows-1 sm:grid-cols-3 grid-cols-1">
                <div>
                    <Logo
                        textLogo="My Independence War"
                        styleLogo="text-main-color font-bold"
                    />
                    <p className="italic text-sm">Ви можете допомогти:</p>
                    <p className="pb-2">Приват 4731219644122388</p>
                    <hr className="sm:hidden dark:border-neutral-700 block" />
                </div>

                <MainMenu
                    styleUL="grid grid-cols-1 gap-2 text-center sm:text-left"
                    styleMenuItem="list-none"
                />

                <div className="pb-2">
                    <hr className="pb-2 sm:hidden dark:border-neutral-700 block " />
                    <p className="hidden sm:block font-semibold pb-2 text-center sm:text-left">Contacts</p>
                    <Contacts
                        styleUl='grid grid-cols-1 gap-2'
                        styleLink='flex items-center justify-center sm:justify-start'
                    />
                </div>
            </div>
            {/* <!--Copyright section--> */}
            <hr className="dark:border-neutral-700" />
            <div className="pt-2 text-center">
                <span>© 2023 Copyright: </span>
                <Link className="font-semibold text-neutral-600 dark:text-neutral-400"
                    href="#"
                >My Independence War</Link>
            </div>
        </footer>
    )
}
