import React, { Component } from 'react'


export default class Post extends Component {

    render(){

        return(

            <div className='gridContent'>
                <div className='post'>
                <h4>{this.props.postTitle}</h4>
                <p>{this.props.postBody}</p>
                </div>
            
            </div>
        )
    }
}