import { fetch } from "./csrf.js";


const NEW_DISAGREE = "disagree/createDisagree";



const createDisagree = (disagree) => ({
  type: NEW_DISAGREE,
  disagree: disagree,
});



export const fetchCreateDisagree = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/disagree/${body.userId}`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const newDisagree = res.data.newDisagree;
    dispatch(createDisagree(newDisagree));
  };
};

const initialState = [];

function disagreeReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case NEW_DISAGREE:
      newState = action.disagree;
      return newState;
    default:
      return state;
  }
}

export default disagreeReducer;
