import { useIntl } from "react-intl";
import { useFavorites } from "../../context/FavoriteContext";

import useCharacterList from "../../hooks/useCharacterList";
import SearchInput from "../common/SearchInput/SearchInput";
import CharacterCard from "../CharacterCard/CharacterCard";
import Loader from "../common/Loader/Loader";

import "./styles.scss";

const CharacterList = () => {
  const { formatMessage } = useIntl();
  const { loading, characterList } = useCharacterList();
  const { favoriteFilter } = useFavorites();

  return (
    <div className="characterList">
      {favoriteFilter && (
        <p className="characterList__favoritesTitle">{formatMessage({ id: "characterList.favorites.title" })}</p>
      )}
      <SearchInput
        loading={loading}
        placeholder={formatMessage({ id: "characterList.searchInput.placeholder" })}
        helpText={formatMessage({ id: "characterList.searchInput.helpText" }, { count: characterList.length })}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="characterList__cardGrid">
            {characterList.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default CharacterList;
