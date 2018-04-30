import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostsList from './components/posts/index';
import Post from './components/posts/post';
import PostForm from './components/posts/new_post_form';
import PostEdit from './components/posts/edit_posts';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';
import reducer from './reducers';

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(
  hashHistory,
  store
);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={PostsList}/>
      <Route path="/posts/:id/profile" component={Post} />
      <Route path="/posts/new" component={PostForm} />
      <Route path="/posts/:id/edit" component={PostEdit} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => {
  console.log(store.getState(), "store");
})
