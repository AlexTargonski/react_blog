import { GET_POSTS, GET_POST_ID, ADD_POST } from "../constants/action_types";

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

    case ADD_POST:
      return {
        ...state,
        posts: [ action.payload, ...state.posts ]
    };


    default:
      return state;
    }
}
