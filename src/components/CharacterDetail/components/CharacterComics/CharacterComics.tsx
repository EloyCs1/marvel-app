import { useIntl } from "react-intl";

import Loader from "src/components/common/Loader/Loader";
import CharacterComic from "../CharacterComic/CharacterComic";

import { CharacterComicsProps } from "./types";
import "./styles.scss";

const CharacterComics: React.FC<CharacterComicsProps> = ({ comics, loading }) => {
  const { formatMessage } = useIntl();
  const testId = `characterComics`;
  return (
    <div className="characterDetail__comics" data-testid={testId}>
      <p className="characterDetail__comics-title" data-testid={`${testId}-title`}>
        {formatMessage({ id: "characterDetail.comics.title" })}
      </p>
      <div className="characterDetail__comics-section" data-testid={`${testId}-section`}>
        {loading ? (
          <Loader testId={`${testId}-loader`} />
        ) : (
          comics.map((comic) => <CharacterComic key={comic.id} comic={comic} />)
        )}
      </div>
    </div>
  );
};
export default CharacterComics;
