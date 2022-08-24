import Head from "next/head"
import Navbar from '../ui/Navbar';

interface Props {
    title?: string
}

const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, title }) => {

    const origin = (typeof window === 'undefined') ? '' : window.location.origin

    return (
        <>
            <Head>
                <title>{title || "PokemonApp"}</title>
                <meta name="author" content="Ivo Wainer" />
                <meta name="description" content={`About the pokémon ${ title }`} />
                <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

                <meta property="og:title" content={`Information about the pokémon ${title}`} />
                <meta property="og:description" content={`This is the page about ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>       

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}

export default MainLayout