import React, { Component } from "react";
import { connect }          from "react-redux";
import { addComment }       from "../../actions/comments";

class CommentForm extends Component {
  constructor(props) {
  super(props);
    this.state = {
      comment: {
       postId: "",
       body: "",
     }
   }
 }

 handleChange(field, e) {
  let new_comment = Object.assign({}, this.state.comment);
  new_comment[field] = e.target.value;
  new_comment.postId = this.props.postId
  this.setState({ comment: new_comment});
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onAddComment(this.state.comment);
    document.getElementById("comment-form").reset();
  }

  render() {
    console.log(this.props.postId)
    return (
      <div className="comments-list">
        <form id="comment-form" onSubmit={ this.handleSubmit.bind(this)}>
          <textarea
            onChange={ this.handleChange.bind( this, 'body') }
            placeholder='Leave a comment...'

          />
          <br />
          <button type="submit">Add comment</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({}),
    dispatch => ({
     onAddComment: (comment) => {
        dispatch(addComment(comment));
     }
  })
)(CommentForm);
