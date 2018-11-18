import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state={
    posts:[]
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      this.setState({
        posts: res.data.slice(0,20)
      })
    })
  }
  render() {
    const { posts } = this.state;
    const postList = posts.map(post=>{
      return(
        <div className={'post card'} key={post.id}>
          <div className={'card-content'}>
            <span className={'card-title'}>
              {post.title}
            </span>
            <p>{post.body}</p>
          </div>
        </div>
      )
    })
    console.log(posts);
    return (
      <div className="App">
        <h3>React requests APP (posts)</h3>
        <hr></hr>
        <div className={'container'}>
          {postList}
        </div>
      </div>
    );
  }
}

export default App;
