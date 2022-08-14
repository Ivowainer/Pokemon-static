import Head from "next/head"

interface Props {
    title?: string
}

const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "PokemonApp"}</title>
                <meta name="author" content="Ivo Wainer" />
                <meta name="description" content="About the pokémon XXXX" />
                <meta name="keywords" content="XXX, pokemon, pokedex" />
            </Head>       

            {/* navbar */}

            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout