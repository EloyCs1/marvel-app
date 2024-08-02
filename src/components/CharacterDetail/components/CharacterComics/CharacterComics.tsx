import { useIntl } from "react-intl";

import Loader from "src/components/common/Loader/Loader";
import CharacterComic from "../CharacterComic/CharacterComic";

import { CharacterComicsProps } from "./types";
import "./styles.scss";

const CharacterComics: React.FC<CharacterComicsProps> = ({ comics, loading }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="characterDetail__comics">
      <p className="characterDetail__comics-title">{formatMessage({ id: "characterDetail.comics.title" })}</p>
      <div className="characterDetail__comics-section">
        {loading ? <Loader /> : comics.map((comic) => <CharacterComic key={comic.id} comic={comic} />)}
      </div>
    </div>
  );
};
export default CharacterComics;
