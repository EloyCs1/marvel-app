import { IconName } from "src/components/common/Icon/types";
import Icon from "src/components/common/Icon/Icon";
import Loader from "src/components/common/Loader/Loader";
import { useFavorites } from "src/context/FavoriteContext";

import { CharacterInfoProps } from "./types";
import "./styles.scss";

const CharacterInfo: React.FC<CharacterInfoProps> = ({ detail, loading }) => {
  const { id, name, description, image } = detail;
  const { favoriteIds, toggleFavoriteId } = useFavorites();

  const nameIcon = favoriteIds.includes(id) ? IconName.FAVORITES_FILLED : IconName.FAVORITES_OUTLINED;
  const onClickIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavoriteId(id);
  };

  return (
    <div className="characterDetail__info">
      <div className="characterDetail__info-image" style={{ backgroundImage: `url(${image})` }}>
        {loading && <Loader />}
      </div>
      <div className="characterDetail__info-content">
        <div className="characterDetail__info-content-header">
          <p>{name}</p>
          {!loading && <Icon name={nameIcon} onClick={onClickIcon} />}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default CharacterInfo;
