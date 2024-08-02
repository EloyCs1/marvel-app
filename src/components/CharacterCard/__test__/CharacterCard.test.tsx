import { render } from "@testing-library/react";
import CharacterCard from "../CharacterCard";
import { CHARACTER } from "src/mocks/mocks";
import { AppWrapper } from "src/test/test.utils";
import { CharacterCardProps } from "../types";
import { IMAGE_NOT_AVAILABLE } from "src/service/constants";

// const mockUseFavorites = { toggleFavoriteId: jest.fn(), favoriteIds: [], favoriteFilter: false };

// jest.mock("src/context/FavoriteContext", () => ({
//   useFavorites: jest.fn(() => mockUseFavorites),
// }));

const defaultProps: CharacterCardProps = {
  character: CHARACTER,
};

describe("CharacterCard", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterCard {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Image not available render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterCard character={{ ...defaultProps.character, image: IMAGE_NOT_AVAILABLE }} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
