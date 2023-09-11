import Link from "next/link"

interface LogoProps {
    textLogo?: string;
    styleLogo?: string;
}

export default function Logo({ styleLogo = 'text-teal-500 font-bold', textLogo = 'MIW' }: LogoProps) {
    return (
        <Link
            href="/"
            className={styleLogo}
        >{textLogo}</Link >
    )
}
