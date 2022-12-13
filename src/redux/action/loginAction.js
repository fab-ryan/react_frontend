const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

const url = process.env.REACT_APP_API;

export const loginUser = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: LOGIN_REQUEST,
    payload: null,
  });
  fetch(`http://localhost:5000/api/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      })
    )
    .catch((error) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      })
    );
};
