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
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>> Run into DELETE_USER:", action);
      let users = state.users;

      users = users.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        users,
      };

    case "CREATE_USER":
      let id = Math.floor(Math.random() * 1000000);
      let user = {
        id: id,
        name: `random - ${id}`,
      };
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      break;
  }
  return state;
};

export default rootReducer;
