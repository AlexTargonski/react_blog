import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getPost }          from '../../actions/posts';
import CommentsList         from '../comments/comments_list';

class Post extends Component {
  componentDidMount () {
    let id = this.props.params.id;
    this.props.onGetPost(id);
  };

  render() {
    const { post } = this.props

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <CommentsList
          postId = {post.id}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    post: state.posts.post
  }),

  dispatch => ({
    onGetPost: (id) => {
      dispatch(getPost(id));
    },
  })

)(Post);
