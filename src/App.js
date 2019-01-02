import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Nav from './Components/nav'
import AddNewPost from './Components/addNewPost'
import Blog from './Components/blog'
import SinglePost from './Components/singlePost'

class App extends Component {
  state = {
    posts: [
      { id: 1, postTitle: 'First Post', postBody: 'This is First Post ' },
      { id: 2, postTitle: 'Second Post', postBody: 'This is Second Post' },
      { id: 3, postTitle: 'Third Post', postBody: 'This is Third Post' },
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

  findPostById = (postId) => {
    let post = this.state.posts
    let singlePost = post.filter(post => post.id == postId)
    return singlePost.length ? singlePost[0] : null
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
            <Route path='/blog/:id' render={(props) => <SinglePost post={this.findPostById(props.match.params.id)} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
