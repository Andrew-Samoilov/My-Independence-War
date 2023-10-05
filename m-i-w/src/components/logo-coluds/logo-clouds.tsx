import Image from 'next/image'
import { logos } from './logo-clouds-data'

export default function LogoClouds() {
    return (
        <div className="mx-auto md:px-6 text-center">
            <h2 className="mb-16 text-3xl font-bold">Tech stack</h2>
            <ul className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {logos.map((logo) => (
                    <li key={logo.id} className="list-none w-1/2 h-1/2 md:w-50 md:h-50 lg:mb-0 hover:bg-teal-200 dark:hover:bg-teal-700">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={100}
                            height={100}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
