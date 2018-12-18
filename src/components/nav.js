import React, { Component } from 'react'
import './nav.css'

export default class Nav extends Component {

    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <input type="text" placeholder="Search.." className='searchInput' />
                </div>
            </div>
        )
    }
}