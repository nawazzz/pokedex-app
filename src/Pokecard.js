import { VStack, Image, Text, Box, Flex } from '@chakra-ui/react';
import React from 'react';
const poke_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends React.Component {
    render() {
        let imgSrc = `${poke_api}${this.props.id}.png`
        return(
            <Flex 
                width='300px' 
                border='1px solid' 
                alignItems='center' 
                justifyContent='center' 
                padding='20px'
                boxShadow='7px 10px 12px -5px rgba(0, 0, 0, 0.56)'
            >
                <Box>
                <Text fontSize='20px' fontWeight={700}>
                {this.props.name}
                </Text>
                <Image src={imgSrc} alt={this.props.name} />
                <Flex flexDir='column' alignItems='center' fontWeight={600} justifyContent='center' >
                    <Text>Type: {this.props.type}</Text>
                    <Text>EXP: {this.props.exp}</Text>
                </Flex>
                </Box>
            </Flex>
        )
    }

}
export default Pokecard