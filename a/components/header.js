import Link from "next/link";
import App from "next/app";

//import '@/styles/header.css'

export default function Header({ isHome }) {
    return (
        <header className="navbar" style={{backgroundColor: isHome ? "transparent" : "#FFF7E0"}}>
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
                    <Link href='/meetings'>Meetings</Link>
                </div>
                <div className="header-item">
                    <Link href='/beliefs'>Beliefs</Link>
                </div>
                <div className="header-item">
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
        </header>
    );
}
