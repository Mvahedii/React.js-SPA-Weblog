import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

export default class Nav extends Component {

    render() {
        return (
            <div>
                <div className="topnav">
                    <Link className="active" to="/">Home</Link>
                    <Link to="/add-new-post">Add New Post</Link>
                    <Link to="/blog">Blog</Link>
                    <input type="text" placeholder="Search.." className='searchInput' />
                </div>
            </div>
        )
    }
}