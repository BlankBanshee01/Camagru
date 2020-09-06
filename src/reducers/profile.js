const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        displayName: action.displayName,
        photoURL: action.photoURL,
      };
    default:
      return state;
  }
};

export default profileReducer;
