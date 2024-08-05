import { useEffect, useRef, useState } from "react";
import { getCharacter, getCharacterComics } from "src/service/api";
import { ApiCharacterComics, ApiCharacters, AppCharacter } from "src/service/types";
import { defaultCharacterComics, defaultCharacterDetail } from "./constants";
import { GET_COMICS_LIMIT } from "src/service/constants";

const useCharacterDetail = (characterId: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState(defaultCharacterDetail);

  const [loadingComics, setLoadingComics] = useState(true);
  const [errorComics, setErrorComics] = useState(false);
  const [comics, setComics] = useState(defaultCharacterComics);

  const isMounted = useRef(true);

  const tryAgain = () => {
    getCharacterDetail();
    getComics();
  };

  const getCharacterDetail = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await getCharacter(characterId);
      const {
        data: { results },
      }: ApiCharacters.Character = await response.json();
      const {
        id,
        name,
        description,
        thumbnail: { extension, path },
      } = results[0];

      const mapCharacter: AppCharacter.Character = {
        id,
        name,
        description,
        image: `${path}.${extension}`,
      };
      setDetail(mapCharacter);
    } catch (error) {
      setError(true);
      setDetail(defaultCharacterDetail);
    } finally {
      setLoading(false);
    }
  };

  const getComics = async () => {
    try {
      setLoadingComics(true);
      setErrorComics(false);

      const response = await getCharacterComics(characterId, GET_COMICS_LIMIT);
      const {
        data: { results },
      }: ApiCharacterComics.Comic = await response.json();

      const mapComics: AppCharacter.Comic[] = results.map(({ id, title, dates, thumbnail: { extension, path } }) => {
        const onsaleDate = dates.find(({ type }) => type === "onsaleDate")?.date;
        return {
          id,
          title,
          onsaleDate: onsaleDate ? new Date(onsaleDate).getFullYear() : NaN,
          image: `${path}.${extension}`,
        };
      });

      setComics(mapComics);
    } catch (error) {
      setErrorComics(true);
      setComics(defaultCharacterComics);
    } finally {
      setLoadingComics(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      getCharacterDetail();
      getComics();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { loading, error, detail, loadingComics, errorComics, comics, tryAgain };
};

export default useCharacterDetail;
