const dataPurchaseReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_DATA_PURCHASE':
        return action.data;
      case 'CLEAR_DATA_PURCHASE':
        return [];
      default:
        return state;
    }
  }
  
  export default dataPurchaseReducer;