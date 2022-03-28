type Props = {
  text: string;
  className?: string;
};

export const JokeView: React.FC<Props> = ({ text, className }) => {
  return (
    <div
      className={`${className} text-white border border-double border-1 border-slate-400 p-3 max-w-lg text-justify`}
    >
      {text}
    </div>
  );
};
