import { render } from "@testing-library/react";
import CharacterCard from "../CharacterCard";
import { CHARACTER } from "../../../mocks/mocks";
import { AppWrapper } from "../../../test/test.utils";

// const mockUseFavorites = { toggleFavoriteId: jest.fn(), favoriteIds: [], favoriteFilter: false };

// jest.mock("src/context/FavoriteContext", () => ({
//   useFavorites: jest.fn(() => mockUseFavorites),
// }));

describe("CharacterCard", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterCard character={CHARACTER} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Image not available render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterCard character={{ ...CHARACTER, image: "image_not_available" }} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
