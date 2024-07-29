import { useEffect, useRef, useState } from "react";
import { getCharacter, getCharacterComics } from "../service/api";
import { AppCharacter } from "../service/types";
import { defaultCharacterComics, defaultCharacterDetail } from "./constants";
import { GET_COMICS_LIMIT } from "../service/constants";

const useCharacterDetail = (characterId: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState(defaultCharacterDetail);

  const [loadingComics, setLoadingComics] = useState(true);
  const [errorComics, setErrorComics] = useState(false);
  const [comics, setComics] = useState(defaultCharacterComics);

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

      const mapCharacter: AppCharacter.Character = {
        id,
        name,
        description,
        image: `${path}.${extension}`,
        favorite: false,
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

      const {
        data: { results },
      } = await getCharacterComics(characterId, GET_COMICS_LIMIT);

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
  }, []);

  return { loading, error, detail, loadingComics, errorComics, comics };
};

export default useCharacterDetail;
