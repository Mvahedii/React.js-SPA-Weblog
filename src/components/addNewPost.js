import React, { Component } from 'react'
import './addNewPost.css'
import axios from 'axios';
// import {withRouter} from 'react-router-dom'


class AddNewPost extends Component {
    titleInput = null;
    bodyInput = null;

    
    handleButton = () => {
        let post = {
            postTitle: this.titleInput.value.trim(),
            postBody: this.bodyInput.value.trim(),
            userId: 1
        }
        
        if (post.postTitle.length && post.postBody.length) {
            this.titleInput.value = '';
            this.bodyInput.value = '';
            
            axios
            .post('http://jsonplaceholder.typicode.com/posts', post)
            .then(response => {
                this.props.onPostCreated(post);
                this.props.history.push('/blog')
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
            
        } else {
            alert('Fill Both Inputs..!')
        }
    }
    
    
    render() {
        
        return (
            <div>
                <input className='titleInput' type='text' ref={el => this.titleInput = el} />
                <textarea type='text' ref={el => this.bodyInput = el} />
                <button onClick={this.handleButton} type='submit'>Send</button>
            </div>

        );
    }
}

export default AddNewPost ;
// export default withRouter(AddNewPost) ;