import { fireEvent, render } from "@testing-library/react";
import { defaultFavoriteContextValue, FavoriteProvider, useFavorites } from "../FavoriteContext";
import { CHARACTERS } from "src/mocks/mocks";

const TestingComponent = () => {
  const { favoriteFilter, toggleFavoriteFilter, favoriteIds, toggleFavoriteId } = useFavorites();
  return (
    <>
      <p data-testid={`favoriteFilter`}>{String(favoriteFilter)}</p>
      <p data-testid={`favoriteIds`}>{favoriteIds.length}</p>
      <button data-testid={`toggleFavoriteFilter`} onClick={() => toggleFavoriteFilter(true)}></button>
      <button data-testid={`toggleFavoriteId`} onClick={() => toggleFavoriteId(CHARACTERS[0].id)}></button>
    </>
  );
};

describe("<FavoriteProvider />", () => {
  test("", () => {
    defaultFavoriteContextValue.toggleFavoriteFilter(true);
    defaultFavoriteContextValue.toggleFavoriteId(CHARACTERS[0].id);

    const { getByTestId } = render(
      <FavoriteProvider values={defaultFavoriteContextValue}>
        <TestingComponent />
      </FavoriteProvider>,
    );

    expect(getByTestId("favoriteFilter").innerHTML).toEqual("false");
    expect(getByTestId("favoriteIds").innerHTML).toEqual("0");

    fireEvent.click(getByTestId("toggleFavoriteFilter"));
    expect(getByTestId("favoriteFilter").innerHTML).toEqual("true");

    fireEvent.click(getByTestId("toggleFavoriteId"));
    expect(getByTestId("favoriteIds").innerHTML).toEqual("1");

    fireEvent.click(getByTestId("toggleFavoriteId"));
    expect(getByTestId("favoriteIds").innerHTML).toEqual("0");
  });
});
