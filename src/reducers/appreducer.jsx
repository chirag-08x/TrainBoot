export const appReducer = (state, action) => {
  switch (action.type) {
    case "openModal":
      return { ...state, isModalOpen: true };

    case "closeModal":
      return { ...state, isModalOpen: false };

    default:
      return { ...state };
  }
};
