import Link from "next/link";

import '@/styles/header.css'

export default function Header() {
    return (
        <header className="navbar">
            <div className="logo">
                <Link href='/'>ABA</Link>
            </div>
            <div className="header-items">
                <div className="header-item">
                    <Link href='/'>Home</Link>
                </div>
                <div className="header-item">
                    <Link href='/about'>About</Link>
                </div>
                <div className="header-item">
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
        </header>
    );
}
