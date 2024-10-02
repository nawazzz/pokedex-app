import { VStack, Text, Flex, Input, Button } from '@chakra-ui/react';
import React, { Component } from 'react'
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmender', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
            {id: 4, name: 'Charmender', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    render() {
        return(
            <VStack width='80%' mt='0' mb='0' mr='auto' ml='auto' py='10'>
                <Flex flexDir='column' justifyContent='center' alignItems='center' gap='10'>
                    <Text fontSize='25px' fontWeight={700}>
                        Pokedex!
                    </Text>
                    <Flex>
                        <Input type='text' placeholder='Enter name of any pokemon from the list below' onChange={(event) => {this.props.handleInputValue(event)}} />
                        <Button onClick={() => {this.props.handleSubmit(this.props.pokemon)}}>SEARCH</Button>
                    </Flex>
                
                </Flex>
                { 
                    this.props.filterPokecards.length > 0 ? 
                        (<Flex flexWrap='wrap' justifyContent='center' gap='5' marginTop='10'>
                            {this.props.filterPokecards.map((elm, index) => {
                                return(
                                    <Pokecard id={elm.id} name={elm.name} type={elm.type} exp={elm.base_experience} />
                                )
                            })}
                        </Flex>) 
                        :
                        (<Flex flexWrap='wrap' justifyContent='center' gap='5' marginTop='10'>
                            {this.props.pokemon.map((elm, index) => {
                                return(                                                
                                    <Pokecard id={elm.id} name={elm.name} type={elm.type} exp={elm.base_experience} />
                                )
                            })}
                        </Flex>)
                
                } 
                
        </VStack>
        )        
    }
}

export default Pokedex;