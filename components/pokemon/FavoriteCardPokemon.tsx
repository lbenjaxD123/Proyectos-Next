import { Grid, Card } from "@nextui-org/react"
import { useRouter } from 'next/router';

interface Props {
    id: number
}

export const FavoriteCardPokemon = ({ id }: Props) => {
    const router = useRouter()
    const onFavoriteClick = () => {
        router.push(`/pokemon/${id}`)
    }

    return (
        <Grid xs={6} sm={4} md={3} xl={2}>
            <Card isHoverable isPressable css={{ padding: 10 }} onClick={onFavoriteClick}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
