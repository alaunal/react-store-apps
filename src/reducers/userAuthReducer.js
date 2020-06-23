const userAuthReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_USER_AUTH':
        return action.data;
      case 'CLEAR_USER_AUTH':
        return {};
      default:
        return state;
    }
  }
  
  export default userAuthReducer;