import Link from "next/link";

import Logo from "../logo/Logo";
import MainMenu from "../main-menu/MainMenu";

export default function Footer() {
    return (
        <footer className="bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 p-2 fixed inset-x-0 bottom-0">
            <div className="sm:grid sm:grid-rows-1 sm:grid-cols-3 gap-2 grid grid-cols-1">
            {/* <div className="flex justify-between sm:flex-col"> */}
                <Logo
                    textLogo="My Independence War"
                    styleLogo="text-teal-500 font-bold text-center sm:text-left "
                />
                <hr className="sm:hidden dark:border-neutral-700 block" />
                <MainMenu
                    styleUL="grid grid-cols-1 gap-2 text-center sm:text-left"
                />
                <div className="pb-2">
                    <hr className="sm:hidden dark:border-neutral-700 block"/>
                    <p className="font-semibold pb-2 text-center sm:text-left">Contacts</p>
                    <ul className="grid grid-cols-1 gap-2">
                        <li>
                            <Link
                                href='tel:+380973232161'
                                className="flex items-center justify-center sm:justify-start"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clip-rule="evenodd" />
                                </svg>
                                +38097 3232 161</Link>
                        </li>
                        <li>
                            <Link
                                href='mailto:veprsag@gmail.com'
                                target='_blank'
                                className="flex items-center justify-center sm:justify-start"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                veprsag@gmail.com</Link>
                        </li>
                        <li>
                            <Link
                                href='https://t.me/Andrew_Samoilov'
                                target='_blank'
                                className="flex items-center justify-center sm:justify-start"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px" y="0px" width="100" height="100"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"></path>
                                </svg>
                                @Andrew_Samoilov</Link>
                        </li>
                    </ul>
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
