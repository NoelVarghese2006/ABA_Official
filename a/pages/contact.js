import Page from "@/components/page";
import Form from 'next/form';

import '@/styles/contact.css'

export default function Contact() {
    return (
        <Page isIndex={false}>
            <section>
            <h1>Contact Us</h1>
            <div className="contact-elements">
                <div className="contact-info">
                    <div className="info">
                        <h1>Address</h1>
                        <p>19204 Windmill Ln</p>
                        <p>Dallas, TX 75252</p>
                    </div>
                    <div className="info">
                        <h1>Phone</h1>
                        <p>469-226-4949</p>
                        <p>972-839-3566</p>
                    </div>
                    <div className="info">
                        <h1>Email</h1>
                        <p>agapebrethrenassembly@gmail.com</p>
                    </div>
                </div>
                <form className="contact-form">
                    <h1>Send a Message</h1>
                    <div className="input-box">
                        <input
                        className="input-box" 
                        name="name"
                        placeholder="Enter your name"/>
                        <input 
                        name="email"
                        placeholder="Enter you email" />
                        <textarea
                        name='content'
                        placeholder="Enter your message" />
                    </div>
                </form>
            </div>
            </section>
        </Page>
    )
}