import { useIntl } from "react-intl";

import Loader from "src/components/common/Loader/Loader";

import { CharacterComicsProps } from "./types";
import "./styles.scss";

const CharacterComics: React.FC<CharacterComicsProps> = ({ comics, loading }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="characterDetail__comics">
      <p className="characterDetail__comics-title">{formatMessage({ id: "characterDetail.comics.title" })}</p>
      <div className="characterDetail__comics-section">
        {loading ? (
          <Loader />
        ) : (
          comics.map(({ id, image, title, onsaleDate }) => (
            <div key={id} className="characterDetail__comics-section-comic">
              <div
                className="characterDetail__comics-section-comic-image"
                style={{ backgroundImage: `url(${image})` }}
              />
              <p className="characterDetail__comics-section-comic-title">{title}</p>
              <p className="characterDetail__comics-section-comic-modified">{isNaN(onsaleDate) ? "-" : onsaleDate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default CharacterComics;
