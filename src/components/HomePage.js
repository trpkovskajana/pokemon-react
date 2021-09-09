import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Pokemons from './Pokemons';
import 'C:/Users/jtrpkovska/VisualStudioCode/pokemon-react/src/App.css';

const HomePage = () => {
    const [state, setState] = useState({
        result: [],
        eror: "",
        loading: false
    });


    useEffect(() => {
        const get = async () => {
            setState((state) => ({ ...state, loading: true }));
            try {
                const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=120").then(res => res.json())
                setState((state) => ({ ...state, result: result.results }))
            }
            catch (e) {
                setState((state) => ({ ...state, error: e.message }));
            }
            finally {
                setState((state) => ({ ...state, loading: false }));
            }
        };
        get()
        return () => { };
    }, []);

    if (state.error) {
        return <div>Error: {state.error}</div>;
    } else if (state.loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Header />
                <div className="container" >
                    <div className="motivation">
                        <h4 className=" d-inline-block">Choose your</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" width="140" height="60" class="d-inline-block align-top" alt="" />
                    </div>
                    <br />
                    <div className="row ">
                        {state.result.map(item => (
                            <div className="col-4 names">
                                <Link to={'/pokemon/' + item.name}>
                                    <Pokemons name={item.name} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <br/>
                <Footer />
            </>
        );
    }
}

export default HomePage