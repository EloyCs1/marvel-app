import { render } from "@testing-library/react";
import { CHARACTERS, COMICS } from "src/mocks/mocks";
import { AppWrapper } from "src/__test__/test.utils";
import { CharacterDetailProps } from "../types";
import CharacterDetail from "../CharacterDetail";

const mockUseCharacterDetail = { detail: CHARACTERS[0], loading: false, comics: COMICS, loadingComics: false };

jest.mock("src/hooks/useCharacterDetail", () => ({
  __esModule: true,
  default: () => mockUseCharacterDetail,
}));

jest.mock("src/components/CharacterDetail/components/CharacterInfo/CharacterInfo", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

jest.mock("src/components/CharacterDetail/components/CharacterComics/CharacterComics", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

const defaultProps: CharacterDetailProps = {
  characterId: CHARACTERS[0].id,
};

describe("CharacterDetail", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterDetail {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
