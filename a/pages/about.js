import Page from "@/components/page";

import '@/styles/about.css'

export default function About() {
    return (
        <Page isIndex={false}>
            <section className="about-page">
            <h1>About Us</h1>
            <p>Agape Brethren Assembly was formed in the year 2011 by the Lord, through a few like-minded brethren, to serve Him in the North Dallas region.<br />
            As an assembly, our focus is on becoming more and more Christ-like in our conduct, reaching the unreached with His glorious Gospel, and abounding in Faith, Hope, and Love.<br />
            In all our gatherings, we follow the apostolic simplicity and strive to exalt Christ.</p>
            </section>
        </Page>
    )
}