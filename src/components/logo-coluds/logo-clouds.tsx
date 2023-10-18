import Image from 'next/image'
import { logos } from './logo-clouds-data'

export default function LogoClouds() {
    return (
        <div className="mx-auto md:px-6 text-center">
            {/* <h2 className="mb-16 text-3xl font-bold">Tech stack</h2> */}
            <h2>Tech stack</h2>
            <ul className="grid justify-items-center gap-6 sm:grid-cols-2 m:grid-cols-4 lg:grid-cols-5">
                {logos.map((logo) => (
                    <li key={logo.id} className="list-none w-1/2 h-1/2">
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
