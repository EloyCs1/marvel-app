import { useIntl } from "react-intl";
import { useFavorites } from "src/context/FavoriteContext";

import useCharacterList from "src/hooks/useCharacterList";
import CharacterCard from "../CharacterCard/CharacterCard";
import SearchInput from "src/components/common/SearchInput/SearchInput";
import Loader from "src/components/common/Loader/Loader";
import ErrorComponent from "../common/ErrorComponent/ErrorComponent";

import "./styles.scss";

const CharacterList = () => {
  const testId = "characterList";
  const { formatMessage } = useIntl();
  const { loading, error, characterList, searchText, onChangeSearchText, tryAgain } = useCharacterList();
  const { favoriteFilter, favoriteIds } = useFavorites();

  const count = favoriteFilter
    ? characterList.filter(({ id }) => favoriteIds.includes(id)).length
    : characterList.length;

  return (
    <div className="characterList">
      {favoriteFilter && (
        <p className="characterList__favoritesTitle" data-testid={`${testId}-favoritesTitle`}>
          {formatMessage({ id: "characterList.favorites.title" })}
        </p>
      )}
      <SearchInput
        testId={`${testId}-searchInput`}
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
        <Loader testId={`${testId}-loader`} />
      ) : !error ? (
        <div className="characterList__cardGrid" data-testid={`${testId}-cardGrid`}>
          {characterList.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <ErrorComponent tryAgain={tryAgain} />
      )}
    </div>
  );
};
export default CharacterList;
