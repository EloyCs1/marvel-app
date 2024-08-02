import { CHARACTERS, CHARACTERS_RESPONSE, COMICS_RESPONSE } from "src/mocks/mocks";
import { getCharacter, getCharacterComics, getCharacters } from "../api";
import { GET_CHARACTERS_LIMIT } from "../constants";

describe("api", () => {
  test("getCharacters", async () => {
    jest.spyOn(global, "fetch").mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(CHARACTERS_RESPONSE),
      } as Response),
    );

    const response = await getCharacters(GET_CHARACTERS_LIMIT);
    const responseJSON = await response.json();
    expect(responseJSON).toStrictEqual(CHARACTERS_RESPONSE);
  });

  test("getCharacters filter nameStartsWith ", async () => {
    jest.spyOn(global, "fetch").mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(CHARACTERS_RESPONSE),
      } as Response),
    );

    const response = await getCharacters(GET_CHARACTERS_LIMIT, "filter");
    const responseJSON = await response.json();
    expect(responseJSON).toStrictEqual(CHARACTERS_RESPONSE);
  });

  test("getCharacter", async () => {
    jest.spyOn(global, "fetch").mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(CHARACTERS_RESPONSE),
      } as Response),
    );

    const response = await getCharacter(CHARACTERS[0].id);
    const responseJSON = await response.json();
    expect(responseJSON).toStrictEqual(CHARACTERS_RESPONSE);
  });

  test("getCharacterComics", async () => {
    jest.spyOn(global, "fetch").mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(COMICS_RESPONSE),
      } as Response),
    );

    const response = await getCharacterComics(CHARACTERS[0].id, GET_CHARACTERS_LIMIT);
    const responseJSON = await response.json();
    expect(responseJSON).toStrictEqual(COMICS_RESPONSE);
  });
});
