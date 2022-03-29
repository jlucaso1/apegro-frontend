type size = "small" | "medium" | "large";
type Props = {
  className?: string;
  size?: size;
};
const computedSize = (size: size) => {
  switch (size) {
    case "small":
      return "2rem";
    case "medium":
      return "3rem";
    case "large":
      return "5rem";
  }
};

export const LoadingSpinner: React.FC<Props> = ({
  size = "medium",
  className,
}) => {
  return (
    <svg
      className={`animate-spin text-white rounded-full border border-1 border-pink-500 ${className}`}
      style={{ width: computedSize(size), height: computedSize(size) }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export type { Props as LoadingSpinnerProps };
