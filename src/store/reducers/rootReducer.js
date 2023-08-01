const initState = {
  users: [
    {
      id: 1,
      name: "MeoU",
    },
    {
      id: 2,
      name: "Mixi",
    },
    {
      id: 3,
      name: "test data redux",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
