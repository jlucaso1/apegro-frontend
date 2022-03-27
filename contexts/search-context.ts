import { createContext, Dispatch, SetStateAction } from "react";
import { Joke } from "../types/joke";

type State = {
  jokes: Joke[];
  setJokes: Dispatch<SetStateAction<Joke[]>>;
};

export const SearchContext = createContext<State>({
  jokes: [],
  setJokes() {},
});
