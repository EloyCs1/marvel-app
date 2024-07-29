import Icon from "../Icon/Icon";
import { IconName } from "../Icon/types";

import { SearchInputProps } from "./types";
import "./styles.scss";

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, loading = false, helpText, value, onChange }) => {
  return (
    <div className="searchInput">
      <div className="searchInput__input">
        <Icon width={12} height={12} name={loading ? IconName.SPINNER : IconName.SEARCH} />
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} disabled={loading} />
      </div>
      {helpText && <p className="searchInput__helpText">{helpText}</p>}
    </div>
  );
};
export default SearchInput;
