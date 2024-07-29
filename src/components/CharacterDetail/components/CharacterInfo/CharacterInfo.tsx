import { IconName } from "../../../common/Icon/types";
import Icon from "../../../common/Icon/Icon";
import Loader from "../../../common/Loader/Loader";

import { CharacterInfoProps } from "./types";
import "./styles.scss";

const CharacterInfo: React.FC<CharacterInfoProps> = ({ detail, loading }) => {
  const { name, description, image, favorite } = detail;
  return loading ? (
    <Loader />
  ) : (
    <div className="characterDetail__info">
      <img src={image} alt={name} />
      <div className="characterDetail__info-content">
        <div className="characterDetail__info-content-header">
          <p>{name}</p>
          <Icon name={favorite ? IconName.FAVORITES_FILLED : IconName.FAVORITES_OUTLINED} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default CharacterInfo;
