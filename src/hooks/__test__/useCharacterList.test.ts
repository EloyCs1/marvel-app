import * as api from "src/service/api";
import { renderHook, waitFor } from "@testing-library/react";
import useCharacterList from "../useCharacterList";
import { CHARACTERS, CHARACTERS_RESPONSE } from "src/mocks/mocks";

describe("useCharacterList hook", () => {
  test("get Character List", async () => {
    jest
      .spyOn(api, "getCharacters")
      .mockReturnValue(Promise.resolve({ json: () => Promise.resolve(CHARACTERS_RESPONSE) } as Response));
    const { result } = renderHook(() => useCharacterList());
    await waitFor(() => {
      const { loading, error, characterList, searchText, onChangeSearchText } = result.current;
      expect(loading).toStrictEqual(false);
      expect(error).toStrictEqual(false);
      expect(characterList).toStrictEqual([CHARACTERS[0]]);
      expect(searchText).toStrictEqual("");
      expect(onChangeSearchText).toBeDefined();
    });
  });

  test("get Character List ERROR", async () => {
    jest.spyOn(api, "getCharacters").mockReturnValue(Promise.reject());
    const { result } = renderHook(() => useCharacterList());
    await waitFor(() => {
      const { error } = result.current;
      expect(error).toStrictEqual(true);
    });
  });

  test("onChangeSearchText", async () => {
    jest
      .spyOn(api, "getCharacters")
      .mockReturnValue(Promise.resolve({ json: () => Promise.resolve(CHARACTERS_RESPONSE) } as Response));

    const { result } = renderHook(() => useCharacterList());
    await waitFor(() => {
      const { searchText, onChangeSearchText } = result.current;
      const event = {
        target: {
          value: "value",
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChangeSearchText(event);
      expect(searchText).toStrictEqual(event.target.value);
    });
  });
});