import useCharacterDetail from "src/hooks/useCharacterDetail";

import CharacterComics from "./components/CharacterComics/CharacterComics";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";

import { CharacterDetailProps } from "./types";
import "./styles.scss";

const CharacterDetail: React.FC<CharacterDetailProps> = ({ characterId }) => {
  const { detail, loading, comics, loadingComics } = useCharacterDetail(characterId);

  return (
    <div className="characterDetail" data-testid={"characterDetail"}>
      <CharacterInfo detail={detail} loading={loading} />
      <CharacterComics comics={comics} loading={loadingComics} />
    </div>
  );
};
export default CharacterDetail;
