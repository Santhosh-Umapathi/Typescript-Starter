const newStarObj = () => {
  return {
    name: "Star",
    color: "Yellow",
  };
};

/*--- Return Type ---*/
//Assigning return type to a new type
type returnType = ReturnType<typeof newStarObj>;
