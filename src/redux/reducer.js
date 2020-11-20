import axios from "axios";

//-Initial state
const initialState = {
  pokemon: {},
};

//-Action types
const GET_POKEMON = "GET_POKEMON";

//-(in redux) an action is an object with a type and a payload
//-Action builders
export function getPokemon() {
  const number = Math.ceil(Math.random() * 151);
  const data = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return {
    type: GET_POKEMON,
    payload: data,
  };
}

//-Reducer function
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POKEMON + "_PENDING":
      console.log("pending hit");
      return { ...state };
    case GET_POKEMON + "_REJECTED":
      return { ...state };
    case GET_POKEMON + "_FULFILLED":
      console.log(payload);
      console.log("fulfilled hit");
      return { ...state, pokemon: payload };
    default:
      return { state };
  }
}
