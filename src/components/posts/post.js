import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getPost }          from '../../actions/posts';
import CommentsList         from '../comments/comments_list';
import Nav                  from '../layouts/nav';

class Post extends Component {
  componentDidMount () {
    let id = this.props.params.id;
    this.props.onGetPost(id);
  };

  render() {
    const { post } = this.props

    return (
      <div>
        <Nav />
        <h1>{post.title}</h1>
        <div className="post-box">
          <p>{post.body}</p>
        </div>
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
