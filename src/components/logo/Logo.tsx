import Link from "next/link"

interface LogoProps {
    textLogo?: string;
    styleLogo?: string;
}

export default function Logo({ styleLogo = 'font-bold text-teal-500 ', textLogo = 'MIW' }: LogoProps) {
    return (
        <Link
            href="/"
            className={styleLogo}
        >{textLogo}</Link >
    )
}
