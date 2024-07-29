import { Link } from "react-router-dom";

import Icon from "../common/Icon/Icon";
import { IconName } from "../common/Icon/types";

import { CharacterCardProps } from "./types";
import "./styles.scss";

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { id, name, image, favorite } = character;

  return (
    <Link className="characterCard" to={`/character/${id}`}>
      <div className="characterCard__image">
        <img src={image} alt={name} />
      </div>
      <div className="characterCard__propeties">
        <p>{name}</p>
        <Icon name={favorite ? IconName.FAVORITES_FILLED : IconName.FAVORITES_OUTLINED} width={12} height={10.84} />
      </div>
    </Link>
  );
};
export default CharacterCard;
