import Page from "@/components/page";
import Link from "next/link";
import Image from "next/image";

//import '@/styles/home.css'

export default function Home() {
    return (
        <Page isIndex={true}>
            <Image
                alt="Intro Image"
                src="/sand.avif"
                width={1770}
                height={1180}
                className='bg-image'
              />
            <div className="title">
                <h1 className="name" style={{backgroundColor: "transparent"}}>Agape Brethren Assembly</h1>
                <h2>Unconditional Love</h2>
            </div>
            <div className="greetings">
                <h1>Welcome!</h1>
                <p>We are a group of believers who gather in the name of Jesus Christ according to the New Testament principles.</p>
                <p>Please view the other pages if you want to know more about our assembly, and God bless you.</p>
            </div>
        </Page>
    )
}