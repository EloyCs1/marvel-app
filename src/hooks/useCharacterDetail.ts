import { useEffect, useRef, useState } from "react";
import { getCharacter, getCharacterComics } from "../service/api";
import { AppCharacter } from "../service/types";
import { defaultCharacterDetail } from "./constants";

const useCharacterDetail = (characterId: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [characterDetail, setCharacterDetail] = useState(defaultCharacterDetail);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const getCharacterDetail = async () => {
    try {
      setLoading(true);
      setError(false);

      const {
        data: { results: resultsCharacter },
      } = await getCharacter(characterId);
      const {
        id,
        name,
        description,
        thumbnail: { extension, path },
      } = resultsCharacter[0];

      const {
        data: { results },
      } = await getCharacterComics(characterId);

      const mapCharacterDetail: AppCharacter.CharacterDetail = {
        id,
        name,
        description,
        image: `${path}.${extension}`,
        favorite: false,
        comics:
          results
            .map(({ id, title, modified, thumbnail: { extension, path } }) => {
              return {
                id,
                title,
                modified: new Date(modified).getFullYear(),
                image: `${path}.${extension}`,
              };
            })
            .sort((a, b) => b.modified - a.modified)
            .slice(0, 20) ?? [],
      };
      setCharacterDetail(mapCharacterDetail);
    } catch (error) {
      setError(true);
      setCharacterDetail(defaultCharacterDetail);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      getCharacterDetail();
    }
  }, []);

  return { loading, error, characterDetail };
};

export default useCharacterDetail;
