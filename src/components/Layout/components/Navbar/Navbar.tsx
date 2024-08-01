import { Link, useNavigate } from "react-router-dom";
import Icon from "src/components/common/Icon/Icon";
import { IconName } from "src/components/common/Icon/types";
import { useFavorites } from "src/context/FavoriteContext";

import "./styles.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const { favoriteIds, toggleFavoriteFilter } = useFavorites();
  return (
    <div className="navbar">
      <Link
        to={"/"}
        onClick={() => {
          toggleFavoriteFilter(false);
        }}
      >
        <Icon width={130} height={52} name={IconName.MARVEL_LOGO} />
      </Link>
      <div className="navbar__favorites">
        <Icon
          name={IconName.FAVORITES_FILLED}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavoriteFilter(true);
            navigate("/");
          }}
        />
        <p>{favoriteIds.length}</p>
      </div>
    </div>
  );
};
export default Navbar;
