import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Nav from './Components/nav'
import AddNewPost from './Components/addNewPost'
import Blog from './Components/blog'

class App extends Component {
  state = {
    posts: [
      { id: 1, postTitle: 'Title of Post', postBody: 'Body is SomeThing About Your Page' }
    ]
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
      console.log(newState, oldState)
      return newState;
    })
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Nav} />
          <Route path='/blog' render = { (props) => <Blog {...props} posts={this.state.posts} /> } />
          <Route path='/add-new-post' render = { (props) => <AddNewPost {...props} onPostCreated={this.newPost} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
