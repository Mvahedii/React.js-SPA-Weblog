import React, { Component } from 'react'
import './addNewPost.css'
export default class AddNewPost extends Component {
    titleInput=null;
    bodyInput=null;


    handleButton = () => {
        let post={
            title:this.titleInput.value.trim(),
            body:this.bodyInput.value.trim()
        }
        
        if(post.title.length && post.body.length){
            this.titleInput.value='';
            this.bodyInput.value='';
            this.props.onPostCreated(post)
        }else{
            alert('Fill Both Inputs..!')
        }
    }


    render() {

        return (
            <div>
                <input className='titleInput' type='text'ref={el =>this.titleInput = el} />
                <textarea type='text' ref={el => this.bodyInput = el} />
                <button onClick={this.handleButton} type='submit'>Send</button>
            </div>

        );
    }
}