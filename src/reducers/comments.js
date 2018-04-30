import { GET_COMMENTS, ADD_COMMENT } from "../constants/action_types";

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

    case ADD_COMMENT:
      return {
        ...state,
        comments: [ action.payload, ...state.comments ]
    };

    default:
      return state;
    }
}
