import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../../actions/comments';

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }
  componentDidMount () {
   this.props.onGetComments(this.state.comments);
  }

  renderComments() {
    return this.props.comments.map((comment, index) => {
      let commentItem = <li key={index}><span>{comment.body}</span></li>
      return (
        comment.postId === this.props.postId ?  commentItem : null
      );
    });
  }

  render() {
    console.log(this.props.postId)
    return (
      <div className="comments-list">
      <ul>
        { this.renderComments() }
      </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    comments: state.comments.comments
  }),
    dispatch => ({
    onGetComments: () => {
      dispatch(getComments());
    }
  })
)(CommentsList);
