import Header from "./header"

export default function Page({children, isIndex}) {
    return (
        <>
            <Header isHome={isIndex}/>
            <main>{children}</main>
        </>
    )
}