import React, { Component } from 'react'
import Post from './post'
import './posts.css'

export default class Posts extends Component {

    render() {
        return (
            <div className='gridContent'>
                <div className='post'>
                    {this.props.posts.map(post => (
                        <Post key={post.id} {...post} />
                    ))
                    }
                </div>
            </div>
        );
    }
}