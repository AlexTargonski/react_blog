import React, { Component } from "react";
import { connect }          from "react-redux";
import { getComments }      from "../../actions/comments";
import CommentForm          from "./new_comment_form";

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
    return (
      <div className="comments-list">
        <h2>Comments:</h2>
        <ul>
          { this.renderComments() }
        </ul>
        < CommentForm
          postId = {this.props.postId}
        />
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
