import { BASE_URL_MARVEL } from "./constants";

const getEndpointUrl = (endpoint: string) => `${BASE_URL_MARVEL}${endpoint}&apikey=${process.env.REACT_APP_API_KEY}`;

const getCharactersUrl = (limit: number, nameStartsWith: string) =>
  getEndpointUrl(`/characters?limit=${limit}${nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : ""}`);
const getCharacterUrl = (characterId: number) => getEndpointUrl(`/characters/${characterId}?`);
const getCharacterComicsUrl = (characterId: number, limit: number) =>
  getEndpointUrl(`/characters/${characterId}/comics?limit=${limit}&orderBy=onsaleDate`);

export const getCharacters = async (limit: number, nameStartsWith = "") => {
  return await fetch(getCharactersUrl(limit, nameStartsWith), { cache: "force-cache" });
};

export const getCharacter = async (characterId: number) => {
  return await fetch(getCharacterUrl(characterId), { cache: "force-cache" });
};

export const getCharacterComics = async (characterId: number, limit: number) => {
  return await fetch(getCharacterComicsUrl(characterId, limit), { cache: "force-cache" });
};