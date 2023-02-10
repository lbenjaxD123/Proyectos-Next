import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"



interface Props {
    children: JSX.Element[] | JSX.Element,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>

                <title>{title || 'Pokemon App'}</title>
                <meta name="autho" content="kamal" />
                <meta name="description" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/imgs/banner.png`} />
            </Head>

            {/* Navbar */}
            <Navbar />
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
