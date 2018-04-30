import axios                                from "axios";
import { GET_POSTS, GET_POST_ID, ADD_POST } from "../constants/action_types";
import { POSTS_URL }                        from "../constants/API";

const HEADERS = new Headers({ 'Content-Type': 'application/json'})
let headers = Object.assign({}, HEADERS)

export function getPosts() {
  return function(dispatch, getState) {
    axios.get(POSTS_URL, { headers: headers })

    .then(res => {
      if (res.status === 200) {
        dispatch({ type: GET_POSTS, payload: res.data });
      }
    })
    .catch(e => {
      console.error("error: ", e);
    })
  }
}

export function getPost(id) {
  return function(dispatch, getState) {
    return new Promise((resolve, reject) => {
      axios.get(`${POSTS_URL}/${id}`, { headers: headers })
      .then(res => {
        resolve(res)
        dispatch({ type: GET_POST_ID, payload: res.data });
      })
      .catch(e => {
        console.error("error: ", e);
      })
    })
  }
}

export function createPost(post) {
  return function(dispatch, getState) {
    axios.post(POSTS_URL, post, { headers: headers })

    .then(res => {
      dispatch({ type: ADD_POST, payload: res.data });
    })
    .catch(error => {
      console.error(error);
    })

  }
}

export function editPost(post) {
  return function(dispatch, getState) {
    axios.patch(`${POSTS_URL}/${post.id}`, post, { headers: headers })

      .then(res => {
        console.log("edit")
      })
    .catch(error => {
      console.error(error);
    })
  }
}
