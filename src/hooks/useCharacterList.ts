import { useEffect, useRef, useState } from "react";
import { GET_CHARACTERS_LIMIT } from "../service/constants";
import { getCharacters } from "../service/api";
import { AppCharacter } from "../service/types";
import { defaultCharacterList } from "./constants";

const useCharacterList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [characterList, setCharacterList] = useState(defaultCharacterList);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const getCharacterList = async () => {
    try {
      setLoading(true);
      setError(false);
      const {
        data: { results },
      } = await getCharacters(GET_CHARACTERS_LIMIT);
      const mapCharacters: AppCharacter.Character[] = results.map(
        ({ id, name, description, thumbnail: { extension, path } }) => ({
          id,
          name,
          description,
          image: `${path}.${extension}`,
          favorite: false,
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
      getCharacterList();
    }
  }, []);

  return { loading, error, characterList };
};

export default useCharacterList;
