import React from 'react'
import ButtonDefault from '../button/ButtonDefault'
import { ContainerCard, ContainerButtons, NameCard } from './styled';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function PokemonCard(props) {
    return (
        <ContainerCard>
            <NameCard>{props.name}</NameCard>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <ContainerButtons>
                <Button
                    onClick={props.addOrRemovePokemon}
                    variant="contained"
                    color="primary">
                    {props.text}
                </Button>
                
                <Link to={`/details/${props.identif}`}>
                <Button
                    variant="contained"
                    color="primary">
                    {props.textDetails}
                </Button>
                </Link>
            </ContainerButtons>
        </ContainerCard>
    )
}
