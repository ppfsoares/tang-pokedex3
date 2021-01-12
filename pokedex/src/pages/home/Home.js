import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import { ContainerHome, ButtonHome, Container } from './styled';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import GlobalContext from '../../components/global/GlobalContext';

export const Title = styled.h1`
text-align: center;
`

export default function Home() {

    const {listPokemon, pokemonList, getPokemons} = useContext(GlobalContext)
    // const pokemonList = useRequestData({}, BASE_URL)
    // const [listPokemon, setListPokemon] = useState([])
    
<<<<<<< HEAD
    useEffect(() => {
        const newListPokemon = []
        pokemonList.results && pokemonList.results.map((item)=>{
            axios.get(item.url).then((response) => {
                newListPokemon.push(response.data)
                if(newListPokemon.length === 20){
                    setListPokemon(newListPokemon)
                }
            }).catch(error => {alert(error)}) 
        })
    }, [pokemonList.results]);
=======
    useEffect(() =>{
        getPokemons()
        //     const newListPokemon = []
    //     pokemonList.results && pokemonList.results.map((item)=>{
    //         axios.get(item.url).then((response) => {
    //             newListPokemon.push(response.data)
    //             if(newListPokemon.length === 20){
    //                 setListPokemon(newListPokemon)
    //             }
    //         }).catch(error => {alert(error)}) 
    //     })
     }, [pokemonList.results]);
>>>>>>> bb37b59fd07ebaacee68b8e892bcf5d2a511dab5
    console.log(listPokemon);
    const pokemonListRender =
    listPokemon.map((item) => {

        return(
             <PokemonCard
                key={item.id}
                identif={item.id}
                name= {item.name}
                image= {item.sprites.front_default}
                text="Adicionar"
                textDetails="Detalhes"
            />
        )
    })
   
    return (
        <Container>
            <Title>LISTA DE POKEMONS</Title>
            <ButtonHome>
                <Link to={'/pokedex'}>
                    <Button variant="outlined" color="primary" >Pokédex</Button>
                </Link>
            </ButtonHome>
            <ContainerHome>
                {pokemonListRender}
            </ContainerHome>
        </Container>
    )
}
