import { fireEvent, render } from "@testing-library/react";
import { CHARACTERS } from "src/mocks/mocks";
import { AppWrapper } from "src/__test__/test.utils";
import { CharacterInfoProps } from "../types";
import CharacterInfo from "../CharacterInfo";
import * as FavoriteContext from "src/context/FavoriteContext";
import { defaultFavoriteContextValue } from "src/context/FavoriteContext";

const defaultProps: CharacterInfoProps = {
  detail: CHARACTERS[0],
  loading: false,
};

describe("CharacterInfo", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterInfo {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("Loading render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterInfo {...defaultProps} loading={true} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Favorite render", () => {
    const mockValuesFavoriteProvider = {
      ...defaultFavoriteContextValue,
      favoriteIds: [defaultProps.detail.id],
      toggleFavoriteId: jest.fn(),
    };

    jest.spyOn(FavoriteContext, "useFavorites").mockReturnValue(mockValuesFavoriteProvider);

    const wrapper = render(
      <AppWrapper>
        <CharacterInfo {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();

    fireEvent.click(wrapper.getByTestId(`characterInfo-icon-button`));
    expect(mockValuesFavoriteProvider.toggleFavoriteId).toBeCalled();
  });
});
