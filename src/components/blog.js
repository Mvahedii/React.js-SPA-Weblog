import React, { Component } from 'react'
import Post from './post.js'
import './blog.css'

export default class Posts extends Component {

    render() {
        return (
            <div className='post'>
                <div className='gridContent'>
                    {this.props.posts.map(post => (
                        <Post key={post.id} {...post} />
                    ))
                    }
                </div>
            </div>
        );
    }
}