import React, { Component } from "react";
import { connect }          from "react-redux";
import { Link }             from "react-router";
import { getPosts }         from "../../actions/posts";
import Nav                  from "../layouts/nav";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount () {
   this.props.onGetPosts(this.state.posts);
  }

  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <li key={index}>
          <div className="post-preview">
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
            <Link className="btn-readmore" to={`/posts/${post.id}`}><p>read more</p></Link>
          </div>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts)
    return (
      <div>
        <Nav />
        <div className="posts-container">
          <ul>
            { this.renderPosts() }
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts.posts
  }),
    dispatch => ({
    onGetPosts: () => {
      dispatch(getPosts());
    }
  })
)(PostsList);
