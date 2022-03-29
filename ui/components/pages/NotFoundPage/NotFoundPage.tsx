import Router from "next/router";
import Button from "../../atoms/Button/Button";
import { JokeView } from "../../atoms/JokeView/JokeView";

export const NotFoundPage: React.FC = () => (
  <div className="flex flex-col gap-y-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <JokeView text="404 not found" />
    <Button label="Back to home" onClick={() => Router.push("/")} />
  </div>
);
