import React, { Component } from "react";
import { connect }          from "react-redux";
import { createPost }       from "../../actions/posts";
import { browserHistory }   from "react-router";

class PostForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        post: {
          title: "",
          body: ""
        }
      }
    }

  handleChange(field, e) {
    let new_post = Object.assign({}, this.state.post);
    new_post[field] = e.target.value;
    this.setState({ post: new_post });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onCreatePost(this.state.post);
    document.getElementById("new-post-form").reset();
  }

  render() {
    return (
      <div>
        <a href="#" onClick={browserHistory.goBack}>Go Back...</a>
        <form id="new-post-form" onSubmit={ this.handleSubmit.bind(this) } >
          <h2>Title:</h2>
          <input
            onChange={ this.handleChange.bind( this, 'title') }
            type="text"
            placeholder='Enter a title'
            required
          />
          <br />
          <h2>Body:</h2>
          <input
            onChange={ this.handleChange.bind( this, 'body') }
            type="text"
            required
          />
          <br/>
          <button type="submit">Create post</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({}),
    dispatch => ({
     onCreatePost: (post) => {
      dispatch(createPost(post));
     }
  })
)(PostForm);
