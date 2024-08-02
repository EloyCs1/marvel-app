import { render } from "@testing-library/react";
import { CHARACTERS } from "src/mocks/mocks";
import { AppWrapper } from "src/__test__/test.utils";
import CharacterList from "../CharacterList";

const mockUseCharacterList = {
  loading: false,
  characterList: CHARACTERS,
  searchText: "",
  onChangeSearchText: jest.fn(),
};

jest.mock("src/hooks/useCharacterList", () => ({
  __esModule: true,
  default: () => mockUseCharacterList,
}));

jest.mock("src/components/CharacterCard/CharacterCard", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

jest.mock("src/components/common/SearchInput/SearchInput", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

describe("CharacterList", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterList />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
