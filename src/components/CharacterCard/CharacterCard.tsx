import { CharacterCardProps } from "./types";
import "./styles.scss";
import Icon from "../common/Icon/Icon";
import { IconName } from "../common/Icon/types";

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { name, image, favorite } = character;

  return (
    <div className="characterCard">
      <div className="characterCard__image">
        <img src={image} alt={name} />
      </div>
      <div className="characterCard__propeties">
        <p>{name}</p>
        <Icon name={favorite ? IconName.FAVORITES_FILLED : IconName.FAVORITES_OUTLINED} width={12} height={10.84} />
      </div>
    </div>
  );
};
export default CharacterCard;
