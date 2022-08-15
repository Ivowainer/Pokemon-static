import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    title?: string
}

const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "PokemonApp"}</title>
                <meta name="author" content="Ivo Wainer" />
                <meta name="description" content={`About the pokémon ${ title }`} />
                <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
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