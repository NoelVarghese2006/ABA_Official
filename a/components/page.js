import Header from "./header"

export default function Page({children, isIndex}) {
    return (
        <>
            <meta></meta>
            <Header isHome={isIndex}/>
            <main>{children}</main>
        </>
    )
}