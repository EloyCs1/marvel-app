import { useIntl } from "react-intl";

import useCharacterList from "../../hooks/useCharacterList";
import SearchInput from "../common/SearchInput/SearchInput";
import CharacterCard from "../CharacterCard/CharacterCard";

import { AppCharacter } from "../../service/types";
import "./styles.scss";

const CharacterList = () => {
  const { formatMessage } = useIntl();

  const { characterList } = useCharacterList();

  const character: AppCharacter.Character = {
    id: 1011031,
    name: "Agent X (Nijo)",
    description:
      "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
    image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    favorite: false,
  };
  console.log("🚀 ~ App ~ characterList:", characterList);
  return (
    <div className="characterList">
      <SearchInput
        placeholder={formatMessage({ id: "characterList.searchInput.placeholder" })}
        helpText={formatMessage({ id: "characterList.searchInput.helpText" }, { count: characterList.length })}
      />
      <div className="characterList__cardGrid">
        <CharacterCard character={character} />
        {characterList.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
export default CharacterList;
