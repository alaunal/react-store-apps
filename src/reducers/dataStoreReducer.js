const dataStoreReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DATA_STORE':
        return action.data;
      case 'CLEAR_DATA_STORE':
        return {};
      default:
        return state;
    }
  }
  
  export default dataStoreReducer;