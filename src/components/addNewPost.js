import React, { Component } from 'react'
import './addNewPost.css'
export default class AddNewPost extends Component {

    render() {

        return (
            <div>
                <label for='title'>Title: </label>
            <input className='titleInput' type='text' id='title' placeholder='Enter Title...' />
                <label for='title'>Text: </label>
                <textarea type='text' placeholder='Enter Some Text...' />
                <button type='submit'>Send</button>
            </div>

        );
    }
}