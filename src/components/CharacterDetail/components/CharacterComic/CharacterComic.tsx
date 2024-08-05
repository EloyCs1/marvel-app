import { EMPTY_VALUE } from "src/service/constants";

import { CharacterComicProps } from "./types";
import "./styles.scss";

const CharacterComic: React.FC<CharacterComicProps> = ({ comic }) => {
  const { id, image, title, onsaleDate } = comic;
  const testId = `characterComic-${id}`;
  return (
    <div className="characterComic" data-testid={testId}>
      <div
        className="characterComic__image"
        style={{ backgroundImage: `url(${image})` }}
        data-testid={`${testId}-image`}
      />
      <p className="characterComic__title" data-testid={`${testId}-title`}>
        {title}
      </p>
      <p className="characterComic__onsaleDate" data-testid={`${testId}-onsaleDate`}>
        {isNaN(onsaleDate) ? EMPTY_VALUE : onsaleDate}
      </p>
    </div>
  );
};
export default CharacterComic;
