import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import './App.css';
import Nav from './Components/nav'
import AddNewPost from './Components/addNewPost'
import Blog from './Components/blog'
import SinglePost from './Components/singlePost'

class App extends Component {
  state = {
    posts: []
  }

  newPost = (post) => {
    this.setState((oldState, props) => {
      console.log(oldState, 'OldState')
      console.log(props, 'Props')
      let newState = {
        ...oldState,
        posts: [
          ...oldState.posts,
          {
            id: oldState.posts[oldState.posts.length - 1].id + 1,
            ...post
          }
        ]
      }
      return newState;
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Nav} />
          <Switch>
            <Route path='/blog' exact render={(props) => <Blog {...props} posts={this.state.posts} />} />
            <Route path='/add-new-post' render={(props) =>
              <AddNewPost {...props} onPostCreated={this.newPost} />} />
            <Route path='/blog/list' render={(props) => <h2>Blog List</h2>} />
            <Route path='/blog/:id' render={(props) => <SinglePost postId={props.match.params.id} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        let data = response.data.slice(0,6).map(item => ({
          id: item.id,
          postTitle: item.title,
          postBody: item.body
        }));
        this.setState((prevState, props) => {
          return {
            ...prevState,
            posts: data
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export default App;
