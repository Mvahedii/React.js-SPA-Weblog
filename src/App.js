import React, { Component } from 'react';
import './App.css';

import Nav from './Components/nav'
import Slider from './Components/slider'
import AddNewPost from './Components/addNewPost'
import Blog from './Components/blog'

class App extends Component {
  state = {
    posts : [
        {id:1, postTitle:'Title of Post', postBody:'Body is SomeThing About Your Page'}
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
      console.log(newState)
      return newState;
    })
  }


  render() {
    return (
      <div>
        <Nav />
        <Slider />
        <Blog posts={this.state.posts} />
        <AddNewPost onPostCreated={this.newPost} />
      </div>
    );
  }
}

export default App;
