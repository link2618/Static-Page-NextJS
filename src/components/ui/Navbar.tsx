import Image from 'next/image';
import Link from 'next/link';
import { Spacer, Text, useTheme, Link as LinkUi } from '@nextui-org/react';

export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 50px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />

            <Link href="/" passHref legacyBehavior>
                <LinkUi>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okémon</Text>
                </LinkUi>
            </Link>

            <Spacer css={{ flex: 1 }}/>
            
            <Link href="/favorites" passHref legacyBehavior>
                <LinkUi css={{ marginRight: '10px' }}>
                    <Text color='white'>Favoritos</Text>
                </LinkUi>
            </Link>

        </div>
    )
};