import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";
import Contacts from "../contacts/Contacts";

export default function Footer() {
    return (
        // <footer className="bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 p-2 fixed inset-x-0 bottom-0">
        <footer className="bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 p-2">
            <div className="container mx-auto md:px-6 sm:grid sm:grid-rows-1 sm:grid-cols-3 gap-2 grid grid-cols-1">
            {/* <div className="flex justify-between sm:flex-col"> */}
                <Logo
                    textLogo="My Independence War"
                    styleLogo="text-teal-500 font-bold text-center sm:text-left "
                />
                <hr className="sm:hidden dark:border-neutral-700 block" />
                <MainMenu
                    styleUL="grid grid-cols-1 gap-2 text-center sm:text-left"
                    styleMenuItem="list-none"
                />
                <div className="pb-2">
                    <hr className="sm:hidden dark:border-neutral-700 block"/>
                    <p className="font-semibold pb-2 text-center sm:text-left">Contacts</p>
                    <Contacts
                        styleUl='grid grid-cols-1 gap-2'
                        styleLink='flex items-center justify-center sm:justify-start'
                    />
                </div>
            </div>
            {/* <!--Copyright section--> */}
            <div className="bg-neutral-200 p-2 text-center dark:bg-neutral-700">
                <span>© 2023 Copyright: </span>
                <a
                    className="font-semibold text-neutral-600 dark:text-neutral-400"
                    href="#"
                >My Independence War</a
                >
            </div>
        </footer>
    )
}
