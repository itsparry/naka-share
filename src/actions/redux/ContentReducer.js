export const ContentReducer = (state = {}, action) => {
    let payload = action.payload;
    switch (action.type) {
      case 'GET_CONTENT':
        return {
          ...state,
          ...payload,
        };
      default:
        return state;
    }
  };
  