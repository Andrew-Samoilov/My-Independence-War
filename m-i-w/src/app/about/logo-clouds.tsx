import Image from 'next/image'

import logoReact from '../../../public/images/logos/logo-react.svg'
import logoNext from '../../../public/images/logos/logo-nextjs.svg'
import logoTypeScript from '../../../public/images/logos/logo-typescript.svg'
import logoTailwind from '../../../public/images/logos/logo-tailwind.svg'
import logoTailwindElements from '../../../public/images/logos/logo-tailwind-elements.svg'

export default function LogoClouds() {
    return (
        <section className="container my-24 mx-auto md:px-6 mb-32 text-center">
            <h2 className="mb-16 text-3xl font-bold">Tech stack</h2>
            <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <li className="rounded lg:mb-0 flex flex-col items-center hover:bg-teal-200 dark:hover:bg-teal-700">
                    <Image
                        src={logoReact}
                        alt='logo React.JS'
                        width='100'
                        height='100'
                        className='py-6'
                    />
                    React
                </li>
                <li className="rounded lg:mb-0 flex flex-col items-center hover:bg-teal-200 dark:hover:bg-teal-700">
                    <Image
                        src={logoNext}
                        alt='logo Next JS'
                        width='100'
                        height='100'
                        className='py-6'
                    />
                    Next JS
                </li>
                <li className="rounded lg:mb-0 flex flex-col items-center hover:bg-teal-200 dark:hover:bg-teal-700">
                    <Image
                        src={logoTypeScript}
                        alt='logo TypeScript'
                        width='100'
                        height='100'
                        className='py-6 hoover:fill-red-500'
                    />
                    TypeScript
                </li>
                <li className="rounded lg:mb-0 flex flex-col items-center hover:bg-teal-200 dark:hover:bg-teal-700">
                    <Image
                        src={logoTailwind}
                        alt='logo Next JS'
                        width='100'
                        height='100'
                        className='py-6'
                    />
                    Tailwind.css
                </li>
                <li className="rounded lg:mb-0 flex flex-col items-center hover:bg-teal-200 dark:hover:bg-teal-700">
                    <Image
                        src={logoTailwindElements}
                        alt='logo Tailwind Elements'
                        width='100'
                        height='100'
                        className='py-6'
                    />
                    Tailwind Elements
                </li>
                <li className="rounded lg:mb-0 flex flex-col items-center hover:bg-teal-200 dark:hover:bg-teal-700">
                    Gray matter
                </li>
            </ul>
        </section>
    )
}
