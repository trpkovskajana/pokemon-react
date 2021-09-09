import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import 'C:/Users/jtrpkovska/VisualStudioCode/pokemon-react/src/App.css';


const Pokemon = () => {

    let { name } = useParams();

    const [pokemon, setPokemon] = useState({
        picture: "",
        experience: 0,
        weight: 0,
        height: 0,
        abilities: []
    });

    async function getPokemon() {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon/" + name).then(res => res.json())
        setPokemon((state) => ({ ...state, picture: result.sprites.other.dream_world.front_default }));
        setPokemon((state) => ({ ...state, experience: result.base_experience }));
        setPokemon((state) => ({ ...state, weight: result.weight }));
        setPokemon((state) => ({ ...state, height: result.height }));
        setPokemon((state) => ({ ...state, abilities: result.abilities.map(ability => ability.ability.name + "") }));
    }

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div>
            <Header />
            <div class="card mb-3" styles="width: 300px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={pokemon.picture} alt="Picture" class="image" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">Base experience: {pokemon.experience}</p>
                            <p class="card-text">Weight: {pokemon.weight}</p>
                            <p class="card-text">Height: {pokemon.height}</p>
                            <p class="card-text">Abilities: </p>
                            <ul class="list-group" styles="display: inline-block">
                                {pokemon.abilities.map(ability => (
                                    <li class="list-group-item">
                                        <span class="badge badge-light">{ability}</span>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: '50px'}}></div>
            <Footer />
        </div>
    )
}

export default Pokemon;