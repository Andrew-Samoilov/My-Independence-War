import LogoClouds from "./logo-clouds"

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
}

export default function About() {
    return (
        <section>
            <h1 className="text-2xl">About</h1>
            <p>Technological demo project that talks about my Ukraine war stories</p>

            <LogoClouds />
            
        </section>
    )
}
