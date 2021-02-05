import { fetch } from "./csrf.js";

const AGREE_DATA = "agree/agreeData";
const NEW_AGREE = "agree/createAgree"

const agreeData = (agree) => ({
  type: AGREE_DATA,
  agree: agree,
});

const createAgree = (agree) => ({
  type: NEW_AGREE,
  agree: agree
})

export const fetchAgreeData = () => {
  return async (dispatch) => {
    const res = await fetch(`/api/agree/`);
    const resData = await res.data;
    dispatch(agreeData(resData));
  };
};

export const fetchCreateAgree = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/agree/${body.userId}`, {
      method: "POST",
      body: JSON.stringify(body)
    });

    const newAgree = res.data.newAgree;
    dispatch(createAgree(newAgree))
  }
}

const initialState = [];

function agreeReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case AGREE_DATA:
      newState = action.agree;
      return newState;
    default:
      return state;
  }
}

export default agreeReducer;
