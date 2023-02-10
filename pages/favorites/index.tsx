import { Layout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';
import { FavoritePokemon } from '@/components/pokemon';

const Favoritos = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons())
    }, [])


    return (
        <Layout title='Favoritos'>

            {
                favoritePokemons.length === 0 ?
                    <NoFavorites /> :
                    <FavoritePokemon pokemons={favoritePokemons} />
            }
        </Layout>
    )
}

export default Favoritos