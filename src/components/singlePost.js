// import React, { Component } from 'react'
// import { withRouter, Redirect } from 'react-router-dom'
// import axios from 'axios'

// class SinglePost extends Component {

//     state = {
//         post: null
//     }

//     render() {
//         console.log(this.props.postId)
//         if (this.props.post) {
//             return (
//                 <div>
//                     <h3> {this.state.post.postTitle} </h3>
//                     <p> {this.state.post.postBody} </p>
//                 </div>

//             );
//         } else {
//             return <Redirect to="/blog" />
//         }
//     }
//     componentDidMount() {
//         this._isMounted = true;
//         axios
//             .get('https://jsonplaceholder.typicode.com/posts/' + + this.props.postId)
//             .then((response) => {
//                 let post = {
//                     id: response.data.id,
//                     postTitle: response.data.title,
//                     postBody: response.data.body
//                 }
//                 this.setState((prevState,props)=>{
//                     console.log('post',post)
//                     console.log('prevState',prevState)
//                     console.log('props',props)
//                 })
//             })
//             .catch((e) => {
//                 console.log('error', e)
//             })
//     }
// }

// export default withRouter(SinglePost);


import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SinglePost extends Component {
    state = {
        post: null
    }

    render() {
        if (this.state.post) {
            return (
                <div className="single-post">
                    <h3>{this.state.post.postTitle}</h3>
                    <p>{this.state.post.postBody}</p>
                </div>
            );
        }
        else {
            return <p className="loading"> </p>;
        }
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/' + this.props.postId)
            .then(response => {
                let post = {
                    id: response.data.id,
                    postTitle: response.data.title,
                    postBody: response.data.body,
                }

                setTimeout(() => {
                    this.setState(oldState => {
                        return {
                            ...oldState,
                            post
                        };
                    });
                }, 2000);
            })
            .catch(err => {
                alert(err);
                console.log(err);
            })
    }
}

export default withRouter(SinglePost);