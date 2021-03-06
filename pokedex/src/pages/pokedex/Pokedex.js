import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import { ContainerHome, ButtonHome, Container } from '../home/styled';
import styled from 'styled-components';
import GlobalContext from '../../components/global/GlobalContext';

export const Title = styled.h1`
text-align: center;
font-size: 1.5em;
`

export default function Pokedex() {
    const { pokedex, setPokedex, listPokemon, setListPokemon } = useContext(GlobalContext)
    console.log(listPokemon)
    
    const removePokemon = (pokemon) => {
        let newPokedex = [...pokedex]
        let newListPokemon = [...listPokemon]
        console.log(newListPokemon)
        const selectedPokemon = listPokemon.findIndex((item) => {
            console.log(item.id)
            console.log(pokemon.id)
            return item.id === pokemon.id;
        } )
        console.log(selectedPokemon)
            newListPokemon.push(selectedPokemon)
            setListPokemon(newListPokemon)
        newPokedex.splice(selectedPokemon, 1)
        setPokedex(newPokedex)
    }
    
    const pokedexListRender = pokedex.map((item) => {   
        return(
             <PokemonCard
                key={item.name}
                identif={item.id}
                name= {item.name}
                image= {item.sprites.front_default}
                text="Remover"
                textDetails="Detalhes"
                addOrRemovePokemon={()=> removePokemon(item)}
            />
        )
    })

    return (
        <Container>
            <Title>MEUS POKEMONS</Title>
        <ButtonHome>
            <Link to={'/'}>
                <Button variant="outlined" color="primary" >Lista de Pokemons</Button>
            </Link>
        </ButtonHome>
        <ContainerHome>
            {pokedexListRender}
        </ContainerHome>
    </Container>
    )
}
