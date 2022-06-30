const initialState = {
   balances: []
  };
  function rootReducer(state = initialState, action) {
    switch (
      action.type 
    ) {
      case "GET_BALANCE":
        return {
          ...state,
          balances: action.payload
        }
        default:
          return state; 
    }
}

export default rootReducer;
  