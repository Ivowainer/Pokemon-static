import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'

export const Navbar = () => {
    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>

            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icon App"
                width={80}
                height={80}
            />

            <NextLink href="/">
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }}/>

            <NextLink href="/favorites" passHref>
                <Link css={{ marginRight: "20px" }}>
                    <Text color="white">Favorites</Text>
                </Link>
            </NextLink>
        </div>
    )
}