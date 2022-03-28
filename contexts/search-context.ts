import { createContext, Dispatch, SetStateAction } from "react";
import { Joke } from "../types/joke";

type State = {
  jokes: Joke[];
  setJokes: Dispatch<SetStateAction<Joke[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const SearchContext = createContext<State>({
  jokes: [],
  setJokes() {},
  isLoading: false,
  setIsLoading() {},
});
