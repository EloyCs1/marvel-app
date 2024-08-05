import { useEffect, useRef, useState } from "react";
import { GET_CHARACTERS_LIMIT } from "src/service/constants";
import { getCharacters } from "src/service/api";
import { ApiCharacters, AppCharacter } from "src/service/types";
import { defaultCharacterList } from "./constants";

const useCharacterList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [characterList, setCharacterList] = useState(defaultCharacterList);
  const isMounted = useRef(true);
  const isSearchMounted = useRef(true);

  const tryAgain = () => getCharacterList(searchText);

  const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const getCharacterList = async (nameStartsWith: string) => {
    try {
      setLoading(true);
      setError(false);
      setCharacterList([]);
      const response = await getCharacters(GET_CHARACTERS_LIMIT, nameStartsWith);
      const {
        data: { results },
      }: ApiCharacters.Character = await response.json();
      const mapCharacters: AppCharacter.Character[] = results.map(
        ({ id, name, description, thumbnail: { extension, path } }) => ({
          id,
          name,
          description,
          image: `${path.replace("http:", "https:")}.${extension}`,
        }),
      );
      setCharacterList(mapCharacters);
    } catch (error) {
      setError(true);
      setCharacterList(defaultCharacterList);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      getCharacterList("");
      isMounted.current = false;
      return;
    }

    if (isSearchMounted.current) {
      isSearchMounted.current = false;
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      getCharacterList(searchText);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  return { loading, error, characterList, searchText, onChangeSearchText, tryAgain };
};

export default useCharacterList;
