import { createContext, Dispatch, SetStateAction } from "react";

type State = {
  jokeText: string;
  setJokeText: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const IndexContext = createContext<State>({
  jokeText: "",
  setJokeText() {},
  isLoading: false,
  setIsLoading() {},
});
