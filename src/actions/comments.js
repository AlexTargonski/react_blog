import axios                          from "axios";
import { GET_COMMENTS, ADD_COMMENT }  from "../constants/action_types";
import { COMMENTS_URL }               from "../constants/API";

const HEADERS = new Headers({ "Content-Type": 'application/json'})
let headers = Object.assign({}, HEADERS)

export function getComments() {
  return function(dispatch, getState) {
    axios.get(COMMENTS_URL, { headers: headers })

    .then(res => {
      if (res.status === 200) {
        dispatch({ type: GET_COMMENTS, payload: res.data });
      }
    })
    .catch(e => {
      console.error("error: ", e);
    })
  }
}

export function addComment(comment) {
  return function(dispatch, getState) {
    axios.post(COMMENTS_URL, comment, { headers: headers })

      .then(res => {
        dispatch({ type: ADD_COMMENT, payload: res.data });
      })
      .catch(error => {
        console.error(error);
      })
  }
}
