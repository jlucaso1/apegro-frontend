import Button from "../../atoms/Button/Button";
import { JokeView } from "../../atoms/JokeView/JokeView";
import { LoadingSpinner } from "../../atoms/LoadingSpinner/LoadingSpinner";

interface RandomJokeProps {
  isLoading: boolean;
  onClick: () => void;
  jokeText?: string;
}

export const RandomJoke: React.FC<RandomJokeProps> = ({
  isLoading,
  jokeText,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-y-4 px-3 items-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <JokeView text={jokeText || "Press the button to get a random joke!"} />
      )}

      <Button onClick={onClick} label="Get a random joke" />
    </div>
  );
};
