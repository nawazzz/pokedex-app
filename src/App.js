import React from 'react';
import './App.css';
import { ChakraProvider, VStack } from '@chakra-ui/react'
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 4,
      name: 'Charmander',
      type: 'fire',
      exp: 62,
      inputValue: '',
      filterPokecards: [],
      insertedText: ''
    }
  }

  handleInputValue = (event) => {
    console.log(event)
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit = (poke) => {
    console.log(poke)
    const temp = poke.filter((elm, index) => {
      if ((elm.name.toLowerCase()) === (this.state.inputValue.toLowerCase())) {
        return true
      }
    }) 
    this.setState({
      filterPokecards: temp,
      inputValue: ''
    }, () => {console.log(this.state, temp)})
  }

  render() {
    return (
      <ChakraProvider>
      <VStack height='100%' w='100%'>
        Pokedex  
        <Pokedex filterPokecards={this.state.filterPokecards} inputValue={this.state.inputValue} handleInputValue={this.handleInputValue} handleSubmit={this.handleSubmit}/>
                
      </VStack>
      </ChakraProvider>
    );    
  }
}

export default App;
