import { SmallPokemon } from "@/interfaces"
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const router = useRouter();
    const { id, name, img } = pokemon;

    const onClick = () => {
        router.push(`/name/${name}`)
    }
    return (
        <Grid xs={6} sm={4} md={3} xl={2}>
            <Card isHoverable isPressable onClick={() => onClick()} css={{ ds: 'none' }}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={img}
                        width="100%"
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>

                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
