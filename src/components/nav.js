import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

class Nav extends Component {

    render() {
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/add-new-post">Add New Post</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <input type="text" placeholder="Search.." className='searchInput' />
                </div>
            </div>
        )
    }
}

export default Nav;