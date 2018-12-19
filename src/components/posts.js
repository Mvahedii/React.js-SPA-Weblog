import React, { Component } from 'react'
import './posts.css'

export default class Posts extends Component {

    render() {
        return (
            <div className='gridContent'>
                <div className='post'>
                    <h4>Post Title</h4>
                    <p>SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing </p>
                </div>
                <div className='post'>
                    <h4>Post Title</h4>
                    <p>SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing </p>
                </div>
                <div className='post'>
                    <h4>Post Title</h4>
                    <p>SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing SomeThing </p>
                </div>
            </div>
        );
    }
}