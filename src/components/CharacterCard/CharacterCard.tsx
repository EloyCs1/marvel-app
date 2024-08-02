import { Link } from "react-router-dom";
import { useFavorites } from "src/context/FavoriteContext";

import Icon from "src/components/common/Icon/Icon";
import { IconName } from "src/components/common/Icon/types";
import { IMAGE_NOT_AVAILABLE } from "src/service/constants";

import { CharacterCardProps } from "./types";
import "./styles.scss";

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { id, name, image } = character;
  const { toggleFavoriteId, favoriteIds, favoriteFilter } = useFavorites();
  const isFavorite = favoriteIds.includes(id);
  const isImageNotAvailable = image.includes(IMAGE_NOT_AVAILABLE);

  const onClickIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavoriteId(id);
  };

  return (favoriteFilter && isFavorite) || !favoriteFilter ? (
    <Link className="characterCard" to={`/character/${id}`}>
      <div
        className="characterCard__image"
        style={{ backgroundImage: `url(${image})`, ...(!isImageNotAvailable && { backgroundPosition: "center" }) }}
      />
      <div className="characterCard__propeties">
        <p>{name}</p>
        <Icon
          name={isFavorite ? IconName.FAVORITES_FILLED : IconName.FAVORITES_OUTLINED}
          width={12}
          height={11}
          onClick={onClickIcon}
        />
      </div>
    </Link>
  ) : (
    <></>
  );
};
export default CharacterCard;
