import { createContext, Dispatch, SetStateAction } from "react";

type State = {
  jokeText: string;
  setJokeText: Dispatch<SetStateAction<string>>;
};

export const IndexContext = createContext<State>({
  jokeText: "",
  setJokeText() {},
});
