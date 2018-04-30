import React, { Component }           from 'react';
import { connect }                    from 'react-redux';
import { getPost, editPost }          from '../../actions/posts';

class EditPost extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    };
  }

  static contextTypes = {
    store: React.PropTypes.object
  };

  componentDidMount () {
    let id = this.props.params.id;
    this.context.store.dispatch(getPost(id))
      .then(response => {
        this.setState({post: response.data});
      })
  };

  handleChange(field, e) {
    let post = Object.assign({}, this.state.post);
    post[field] = e.target.value;
    this.setState({ post: post });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onEditPost(this.state.post);
  }

  render() {
    const { post } = this.state
    console.log(this.state)
    return (
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) } >
          <h2>Title:</h2>
          <input
            value={post.title}
            onChange={ this.handleChange.bind( this, 'title') }
            type="text"
          />
          <br />
          <h2>Body:</h2>
          <input
            value={post.body}
            onChange={ this.handleChange.bind( this, 'body') }
            type="text"
          />
          <br/>
          <button type="submit">Edit post</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    posts_edition: state.posts.post
  }),

  dispatch => ({
    onEditPost: (post) => {
      dispatch(editPost(post));
    }
  })

)(EditPost);
