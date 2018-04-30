import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Nav extends Component {

  render() {
    return (
        <nav>
          <h2>BLOG</h2>
          |
          <Link to={`/`}>Home</Link>
          |
          <Link to={`/posts/new`}>Create new post</Link>
        </nav>
    )
  }
}

export default Nav;
