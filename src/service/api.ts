import { BASE_URL_MARVEL } from "./constants";
import { ApiCharacters, ApiCharacterComics } from "./types";

const getEndpointUrl = (endpoint: string) => `${BASE_URL_MARVEL}${endpoint}&apikey=${process.env.REACT_APP_API_KEY}`;

const getCharactersUrl = (limit: number) => getEndpointUrl(`/characters?limit=${limit}`);
const getCharacterUrl = (characterId: number) => getEndpointUrl(`/characters/${characterId}?`);
const getCharacterComicsUrl = (characterId: number) => getEndpointUrl(`/characters/${characterId}/comics?`);

export const getCharacters = async (limit: number): Promise<ApiCharacters.Character> => {
  const response = await fetch(getCharactersUrl(limit));
  return await response.json();
};

export const getCharacter = async (characterId: number): Promise<ApiCharacters.Character> => {
  const response = await fetch(getCharacterUrl(characterId));
  return await response.json();
};

export const getCharacterComics = async (characterId: number): Promise<ApiCharacterComics.Comic> => {
  const response = await fetch(getCharacterComicsUrl(characterId));
  return await response.json();
};
