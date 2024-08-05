import { fireEvent, render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";
import { defaultFavoriteContextValue } from "src/context/FavoriteContext";
import * as FavoriteContext from "src/context/FavoriteContext";
import Layout from "../Layout";
import { CHARACTERS } from "src/mocks/mocks";
import { mockNavigate } from "src/setupTests";

describe("Layout", () => {
  test("Default render", () => {
    const mockValuesFavoriteProvider = {
      ...defaultFavoriteContextValue,
      favoriteIds: CHARACTERS.map(({ id }) => id),
      toggleFavoriteFilter: jest.fn(),
    };

    jest.spyOn(FavoriteContext, "useFavorites").mockReturnValue(mockValuesFavoriteProvider);

    const wrapper = render(
      <AppWrapper>
        <Layout>
          <div />
        </Layout>
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.getByTestId(`layout-count`).innerHTML).toBe(String(CHARACTERS.length));

    fireEvent.click(wrapper.getByTestId(`layout-icon-button`));
    fireEvent.click(wrapper.getByTestId(`layout-link`));
    expect(mockValuesFavoriteProvider.toggleFavoriteFilter).toBeCalledTimes(2);
    expect(mockNavigate).toBeCalled();
  });
});
