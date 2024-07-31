import { IconName } from "../../../common/Icon/types";
import Icon from "../../../common/Icon/Icon";
import Loader from "../../../common/Loader/Loader";
import { useFavorites } from "../../../../context/FavoriteContext";

import { CharacterInfoProps } from "./types";
import "./styles.scss";

const CharacterInfo: React.FC<CharacterInfoProps> = ({ detail, loading }) => {
  const { id, name, description, image } = detail;
  const { favoriteIds, toggleFavoriteId } = useFavorites();
  const isFavorite = favoriteIds.includes(id);
  return (
    <div className="characterDetail__info">
      <div className="characterDetail__info-image" style={{ backgroundImage: `url(${image})` }}>
        {loading && <Loader />}
      </div>
      <div className="characterDetail__info-content">
        <div className="characterDetail__info-content-header">
          <p>{name}</p>
          {!loading && (
            <Icon
              name={isFavorite ? IconName.FAVORITES_FILLED : IconName.FAVORITES_OUTLINED}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavoriteId(id);
              }}
            />
          )}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default CharacterInfo;
