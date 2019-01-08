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