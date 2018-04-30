import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getPosts } from '../../actions/posts';

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
          <span>{ post.title }</span>
          <span>{ post.body }</span>
          <Link to={`/posts/${post.id}`}> read more </Link>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts)
    return (
      <div className="posts-container">
      <ul>
        { this.renderPosts() }
      </ul>
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
