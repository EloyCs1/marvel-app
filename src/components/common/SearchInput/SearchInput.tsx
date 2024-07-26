import Icon from "../Icon/Icon";
import { IconName } from "../Icon/types";
import "./styles.scss";
import { SearchInputProps } from "./types";

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, helpText, value, onChange }) => {
  return (
    <div className="searchInput">
      <div className="searchInput__input">
        <Icon width={12} height={12} name={IconName.SEARCH} />
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
      </div>
      {helpText && <p className="searchInput__helpText">{helpText}</p>}
    </div>
  );
};
export default SearchInput;
