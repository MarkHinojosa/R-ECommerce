const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state.slice(0, action.index), action.payload];

    default:
      return state;
  }
};
export default cartReducer;
