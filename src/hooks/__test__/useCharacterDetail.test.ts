import * as api from "src/service/api";
import { renderHook, waitFor } from "@testing-library/react";
import useCharacterDetail from "../useCharacterDetail";
import { CHARACTERS, CHARACTERS_RESPONSE, COMICS, COMICS_RESPONSE } from "src/mocks/mocks";

describe("useCharacterDetail hook", () => {
  test("get Character Detail", async () => {
    jest
      .spyOn(api, "getCharacter")
      .mockReturnValue(Promise.resolve({ json: () => Promise.resolve(CHARACTERS_RESPONSE) } as Response));
    jest
      .spyOn(api, "getCharacterComics")
      .mockReturnValue(Promise.resolve({ json: () => Promise.resolve(COMICS_RESPONSE) } as Response));
    const { result } = renderHook(() => useCharacterDetail(CHARACTERS[0].id));
    await waitFor(() => {
      const { loading, error, detail, loadingComics, errorComics, comics } = result.current;
      expect(loading).toStrictEqual(false);
      expect(error).toStrictEqual(false);
      expect(detail).toStrictEqual(CHARACTERS[0]);
      expect(loadingComics).toStrictEqual(false);
      expect(errorComics).toStrictEqual(false);
      expect(comics).toStrictEqual(COMICS);
    });
  });

  test("get Character Detail ERROR", async () => {
    jest.spyOn(api, "getCharacter").mockReturnValue(Promise.reject());
    jest.spyOn(api, "getCharacterComics").mockReturnValue(Promise.reject());
    const { result } = renderHook(() => useCharacterDetail(CHARACTERS[0].id));
    await waitFor(() => {
      const { error, errorComics, tryAgain } = result.current;
      tryAgain();
      expect(error).toStrictEqual(true);
      expect(errorComics).toStrictEqual(true);
    });
    expect(api.getCharacter).toBeCalledTimes(3);
  });
});
