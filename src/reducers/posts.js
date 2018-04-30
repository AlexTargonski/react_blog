import { GET_POSTS, GET_POST_ID } from '../constants/action_types';

let initState = {
  posts: [],
  post: {}
}

export default function posts(state = initState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
    };

    case GET_POST_ID:
      return {
        ...state,
        post: action.payload
    };

    default:
      return state;
    }
}
