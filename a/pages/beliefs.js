import Page from "@/components/page";

import '@/styles/beliefs.css'

export default function Beliefs() {
    return (
        <Page isIndex={false}>
            <section className="beliefs-bg">
            <h1 className="beliefs-title">We Believe That...</h1>
            <ul>
                <li className="beliefs-list">That the Bible is the inspired Word of God and is the final authority for all matters of faith, life, and conduct. (2 Timothy 3:16-17, 2 Peter 1:21, John 17:17)</li>
                <li className="beliefs-list">That the Godhead eternally exists in three persons – the Father, the Son, and the Holy Spirit. God is our Creator, Redeemer, and Sustainer. (Matthew 28:19, 2 Corinthians 13:14, James 1:17)</li>
                <li className="beliefs-list">That man was created in the image of God and fell in sin by disobedience. (Genesis 2:17, Romans 5:18, Ephesians 2:1-3)</li>
                <li className="beliefs-list">In the virgin birth of the Lord Jesus Christ and that He is the only Savior. (John 3:16, 14:6, Acts 4:12)</li>
                <li className="beliefs-list">That salvation is by grace through faith and not of works. Salvation is the gift of God and is eternally secure. (Ephesians 2:8-9, John 10:28, Romans 8:38)</li>
                <li className="beliefs-list">That the Church is the body of Christ, which began on the day of Pentecost with Jesus Christ as the head. The Church is entrusted with the ministries of worship, edification, and evangelism. (Acts 2:14-47, Ephesians 2:20-23)</li>
                <li className="beliefs-list">That baptism and the Lord’s Supper are the only ordinances of the Church instituted by Jesus Christ. (Matthew 28:19, 1 Corinthians 11:23-26)</li>
                <li className="beliefs-list">That the Holy Spirit indwells every believer upon belief in the Lord Jesus.(Acts 2:1-4, Romans 8:9)</li>
                <li className="beliefs-list">That the Lord Jesus Christ has commissioned His Church to proclaim the Gospel to all people and make disciples of all nations. (Matthew 28:18-20)</li>
                <li className="beliefs-list">That the Church will be raptured, followed by the Great Tribulation and Christ’s return to the earth to establish His Millennial Kingdom. (Matthew 24:15-30, 1 Thessalonians 4:16-17, Revelation 20:4-6)</li>
            </ul>
            </section>
        </Page>
    )
}