import { useState} from 'react';
import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { Api } from "@mui/icons-material";
import { Grid} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Navbar } from "../../components/Navbar";
import { PokeCard } from "../../components/PokeCard";
import "./style.css";
import { Skeletons } from '../../components/Skeletons';

export function Home () {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

    const getPokemons = () => {
      var endpoints = [];
      for (var i = 1; i < 300; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
    };

    const pokemonFilter = (name) => {
      var filteredPokemons = [];
      if(name === "") {
        getPokemons();
      }
      for (var i in pokemons) {
        if(pokemons[i].data.name.includes(name)) {
          filteredPokemons.push(pokemons[i]);
        }
      }
      setPokemons(filteredPokemons);
    }

  return (
    <div className="main-container">
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="xg">
        <Grid className="ctx" container spacing={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}>
                <PokeCard className="card" name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
              </Grid>
            )) 
          )}
        </Grid>
      </Container>
    </div>
  );
};
