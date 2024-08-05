import Icon from "../Icon/Icon";
import { IconName } from "../Icon/types";

import { SearchInputProps } from "./types";
import "./styles.scss";

const SearchInput: React.FC<SearchInputProps> = ({
  testId = "searchInput",
  placeholder,
  loading = false,
  helpText,
  value,
  onChange,
}) => {
  return (
    <div className="searchInput" data-testid={testId}>
      <div className="searchInput__input">
        <Icon testId={`${testId}-icon`} width={12} height={12} name={loading ? IconName.SPINNER : IconName.SEARCH} />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={loading}
          data-testid={`${testId}-input`}
        />
      </div>
      {helpText && (
        <p className="searchInput__helpText" data-testid={`${testId}-helpText`}>
          {helpText}
        </p>
      )}
    </div>
  );
};
export default SearchInput;
