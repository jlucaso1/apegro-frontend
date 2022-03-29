import { FormEvent, useState } from "react";
import Button from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { LoadingSpinner } from "../../atoms/LoadingSpinner/LoadingSpinner";

interface SearchFormProps {
  onSubmit?: (searchText: string) => void;
  isLoading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  isLoading,
  onSubmit,
}) => {
  const [searchText, setSearchText] = useState("");
  const _onSubmit = (e: FormEvent) => {
    e.preventDefault();
    return onSubmit?.(searchText);
  };
  return (
    <form className="flex flex-col items-center gap-y-3" onSubmit={_onSubmit}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      )}
      <Button label="Search" />
    </form>
  );
};
