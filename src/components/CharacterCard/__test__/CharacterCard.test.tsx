import { fireEvent, render } from "@testing-library/react";
import CharacterCard from "../CharacterCard";
import { CHARACTERS } from "src/mocks/mocks";
import { AppWrapper } from "src/__test__/test.utils";
import { CharacterCardProps } from "../types";
import { IMAGE_NOT_AVAILABLE } from "src/service/constants";
import { defaultFavoriteContextValue } from "src/context/FavoriteContext";
import * as FavoriteContext from "src/context/FavoriteContext";

const defaultProps: CharacterCardProps = {
  character: CHARACTERS[0],
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

  test("Empty render", () => {
    const mockValuesFavoriteProvider = {
      ...defaultFavoriteContextValue,
      favoriteFilter: true,
    };
    const wrapper = render(
      <AppWrapper valuesFavoriteProvider={mockValuesFavoriteProvider}>
        <CharacterCard {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Favorite card render", () => {
    const mockValuesFavoriteProvider = {
      ...defaultFavoriteContextValue,
      favoriteIds: [defaultProps.character.id],
      toggleFavoriteId: jest.fn(),
    };

    jest.spyOn(FavoriteContext, "useFavorites").mockReturnValue(mockValuesFavoriteProvider);

    const wrapper = render(
      <AppWrapper>
        <CharacterCard {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();

    fireEvent.click(wrapper.getByTestId(`characterCard-icon-${defaultProps.character.id}-button`));
    expect(mockValuesFavoriteProvider.toggleFavoriteId).toBeCalled();
  });
});
