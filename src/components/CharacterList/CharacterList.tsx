import { useIntl } from "react-intl";
import { useFavorites } from "src/context/FavoriteContext";

import useCharacterList from "src/hooks/useCharacterList";
import CharacterCard from "../CharacterCard/CharacterCard";
import SearchInput from "src/components/common/SearchInput/SearchInput";
import Loader from "src/components/common/Loader/Loader";

import "./styles.scss";

const CharacterList = () => {
  const { formatMessage } = useIntl();
  const { loading, characterList, searchText, onChangeSearchText } = useCharacterList();
  const { favoriteFilter, favoriteIds } = useFavorites();

  const count = favoriteFilter
    ? characterList.filter(({ id }) => favoriteIds.includes(id)).length
    : characterList.length;

  return (
    <div className="characterList">
      {favoriteFilter && (
        <p className="characterList__favoritesTitle">{formatMessage({ id: "characterList.favorites.title" })}</p>
      )}
      <SearchInput
        value={searchText}
        loading={loading}
        placeholder={formatMessage({ id: "characterList.searchInput.placeholder" })}
        helpText={formatMessage(
          { id: "characterList.searchInput.helpText" },
          {
            count,
          },
        )}
        onChange={onChangeSearchText}
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
