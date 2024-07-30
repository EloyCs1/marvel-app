import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoriteContext";

import Icon from "../common/Icon/Icon";
import { IconName } from "../common/Icon/types";

import { CharacterCardProps } from "./types";
import "./styles.scss";

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { id, name, image } = character;
  const { toggleFavoriteId, favoriteIds, favoriteFilter } = useFavorites();
  const isFavorite = favoriteIds.includes(id);

  return (favoriteFilter && isFavorite) || !favoriteFilter ? (
    <Link className="characterCard" to={`/character/${id}`}>
      <div className="characterCard__image">
        <img src={image} alt={name} />
      </div>
      <div className="characterCard__propeties">
        <p>{name}</p>
        <Icon
          name={isFavorite ? IconName.FAVORITES_FILLED : IconName.FAVORITES_OUTLINED}
          width={12}
          height={10.84}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavoriteId(id);
          }}
        />
      </div>
    </Link>
  ) : (
    <></>
  );
};
export default CharacterCard;
