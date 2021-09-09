import React from 'react'
import 'C:/Users/jtrpkovska/VisualStudioCode/pokemon-react/src/App.css';

const Pokemons =({name}) => {
    return (
      <div style={{ textDecoration: 'none', color:'black' , justifyContent: 'center' , marginLeft: '40%' }}>
        {name}
      </div>
    )
}

export default Pokemons;