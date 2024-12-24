import Page from "@/components/page";

//import '@/styles/about.css'

export default function About() {
    return (
        <Page isIndex={false}>
            <section className="about-page">
            <div className="history">
                <h1>About Us</h1>
                <p>Agape Brethren Assembly was formed in the year 2011 by the Lord, through a few like-minded brethren, to worship and serve Him in the North Dallas region.<br /><br />
                As an assembly, our focus is on becoming more and more Christ-like in our conduct, reaching the unreached with His glorious Gospel, and abounding in Faith, Hope, and Love.<br /><br />
                In all our gatherings, we follow the apostolic simplicity as outlined in His Word and strive to exalt Christ in whatever we do.</p>
            </div>
            <div className="agape">
                <h1>What is Agape?</h1>
                <p>"AGAPE" is Greek for unconditional love, the greatest form of love seen in the Bible. God manifested this love towards mankind by sending His only begotten Son Jesus Christ to die for man's sins on the cross of calvary, so that "...whosoever believes in Him will not perish but have everlasting life". (John 3:16)<br /><br />
                Are you burdened with sins and wondering who can save you? Christ alone! "Nor is there salvation in any other, for there's no other name under heaven given among men by which we must be saved". (Acts 4:12)<br /><br />
                If you confess your sins, believe in Jesus Christ, and accept Him as the Lord of your life, you will be saved. To such that are saved, "he gave the right to be called the children of God". (John 1:12)<br /><br />
                </p>
                <p>If you have any questions, please feel free to contact us using any of the means provided on the contact page.</p>
            </div>
            </section>
        </Page>
    )
}