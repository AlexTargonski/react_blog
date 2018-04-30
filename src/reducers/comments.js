import { GET_COMMENTS } from '../constants/action_types';

let initState = {
  comments: [],
}

export default function posts(state = initState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
    };

    default:
      return state;
    }
}
