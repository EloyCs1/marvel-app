import { render } from "@testing-library/react";
import { CHARACTERS } from "src/mocks/mocks";
import { AppWrapper } from "src/__test__/test.utils";
import CharacterList from "../CharacterList";
import { defaultFavoriteContextValue } from "src/context/FavoriteContext";

const mockUseCharacterList = {
  loading: false,
  characterList: CHARACTERS,
  searchText: "",
  onChangeSearchText: jest.fn(),
  error: false,
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

  test("Favorites values render", () => {
    const mockValuesFavoriteProvider = {
      ...defaultFavoriteContextValue,
      favoriteFilter: true,
      favoriteIds: [CHARACTERS[0].id],
      toggleFavoriteId: jest.fn(),
    };

    const wrapper = render(
      <AppWrapper valuesFavoriteProvider={mockValuesFavoriteProvider}>
        <CharacterList />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.getByTestId(`characterList-favoritesTitle`)).toBeInTheDocument();
  });

  test("Error render", () => {
    mockUseCharacterList.error = true;
    const wrapper = render(
      <AppWrapper>
        <CharacterList />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Loading render", () => {
    mockUseCharacterList.loading = true;
    const wrapper = render(
      <AppWrapper>
        <CharacterList />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
