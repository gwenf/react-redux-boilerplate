function exampleReducer(state = '', action){
  switch (action.type) {
    case 'TESTING_DATA':
      console.log('reducer working', action.testData);
      return action.testData;
    default:
      return state;
  };
};
export default exampleReducer