import { EMPTY_VALUE } from "src/service/constants";

import { CharacterComicProps } from "./types";
import "./styles.scss";

const CharacterComic: React.FC<CharacterComicProps> = ({ comic }) => {
  const { image, title, onsaleDate } = comic;
  return (
    <div className="characterComic">
      <div className="characterComic__image" style={{ backgroundImage: `url(${image})` }} />
      <p className="characterComic__title">{title}</p>
      <p className="characterComic__onsaleDate">{isNaN(onsaleDate) ? EMPTY_VALUE : onsaleDate}</p>
    </div>
  );
};
export default CharacterComic;
