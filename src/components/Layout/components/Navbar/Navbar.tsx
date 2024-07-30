import { Link, useNavigate } from "react-router-dom";
import Icon from "../../../common/Icon/Icon";
import { IconName } from "../../../common/Icon/types";
import { useFavorites } from "../../../../context/FavoriteContext";

import "./styles.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const { favoriteIds, toggleFavoriteFilter } = useFavorites();
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img width="130" height="52" src={`${process.env.PUBLIC_URL}/marvel-logo.jpg`} alt="logo" />
      </Link>
      <div className="navbar__favorites">
        <Icon
          name={IconName.FAVORITES_FILLED}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavoriteFilter();
            navigate("/");
          }}
        />
        <p>{favoriteIds.length}</p>
      </div>
    </div>
  );
};
export default Navbar;
