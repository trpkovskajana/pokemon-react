import React from 'react'
import { Link } from 'react-router-dom';
import 'C:/Users/jtrpkovska/VisualStudioCode/pokemon-react/src/App.css';

const Header = () => {
    return (
        <>
            <Link to={'/'} style={{ textDecoration: 'none', color:'black'}}>
                <nav class="navbar navbar-light bg-light">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" width="50" height="50" class="d-inline-block align-top" alt="" />
                    <h1>Gotta catch em all!</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" width="50" height="50" class="d-inline-block align-top" alt="" />
                </nav>
            </Link>
        </>
    );
}

export default Header