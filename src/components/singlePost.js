import React, { Component } from 'react'
import  { withRouter , Redirect}from 'react-router-dom'

class SinglePost extends Component {

    render() {
        if(this.props.post){
            return (
                <div>
                    <h3> {this.props.post.postTitle} </h3>
                    <p> {this.props.post.postBody} </p>
                </div>
    
            );
        }else {
            return <Redirect to="/blog" />
        }
    }
}

export default withRouter(SinglePost);