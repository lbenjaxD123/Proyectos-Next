
import { pokeApi } from '@/api'
import { Layout } from '@/components/layouts'
import { PokemonCard } from '@/components/pokemon'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { Grid } from '@nextui-org/react'
import { GetStaticProps, NextPage } from 'next'


interface Props {
	pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {

	return (
		<Layout title='Listado de Pokémons'>

			<h1>Hola mundo</h1>
			<Grid.Container gap={2} justify='flex-end'>
				{
					pokemons.map(poke => (
						<PokemonCard key={poke.id} pokemon={poke} />
					))
				}
			</Grid.Container>
		</Layout>
	)
}

export default Home;
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
		...pokemon,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
	}))
	return {
		props: {
			pokemons
		}
	}
}