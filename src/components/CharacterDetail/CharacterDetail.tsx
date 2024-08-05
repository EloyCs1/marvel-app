import useCharacterDetail from "src/hooks/useCharacterDetail";

import CharacterComics from "./components/CharacterComics/CharacterComics";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";
import ErrorComponent from "../common/ErrorComponent/ErrorComponent";

import { CharacterDetailProps } from "./types";
import "./styles.scss";

const CharacterDetail: React.FC<CharacterDetailProps> = ({ characterId }) => {
  const { detail, loading, error, comics, loadingComics, errorComics, tryAgain } = useCharacterDetail(characterId);

  return error || errorComics ? (
    <ErrorComponent tryAgain={tryAgain} />
  ) : (
    <div className="characterDetail" data-testid={"characterDetail"}>
      <CharacterInfo detail={detail} loading={loading} />
      <CharacterComics comics={comics} loading={loadingComics} />
    </div>
  );
};
export default CharacterDetail;
