import Page from "@/components/page";
import Form from 'next/form';

export default function Contact() {
    return (
        <Page isIndex={false}>
            <section>
            <form>
                <input 
                name="name"
                placeholder="Enter your name"/>
            </form>
            </section>
        </Page>
    )
}