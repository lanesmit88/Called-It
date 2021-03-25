import { fetch } from "./csrf.js";

const NEW_DISAGREE = "disagree/createDisagree";

const CreateDisagree = (disagree) => ({
  type: NEW_DISAGREE,
  disagree: disagree,
});

export const fetchCreateDisagree = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/disagree/${body.userId}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const createDisagree = res.data.createDisagree;
    dispatch(CreateDisagree(createDisagree));
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
