import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css'

export default class NavBar extends React.Component {
    render() {
        return (
            <div className='navContainer'>
                <nav>
                    <div >
                        <NavLink className='link'exact activeClassName='active' to='/'>Home</NavLink>
                    </div>
                    <div >
                        <NavLink className='link' activeClassName='active' to='/events'>Events</NavLink>
                    </div>
                </nav>

            </div>
        );
    }
}