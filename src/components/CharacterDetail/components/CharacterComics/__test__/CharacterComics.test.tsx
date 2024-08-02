import { render } from "@testing-library/react";
import { COMICS } from "src/mocks/mocks";
import { AppWrapper } from "src/test/test.utils";
import { CharacterComicsProps } from "../types";
import CharacterComics from "../CharacterComics";

jest.mock("src/components/CharacterDetail/components/CharacterComic/CharacterComic", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

const defaultProps: CharacterComicsProps = {
  comics: COMICS,
  loading: false,
};

describe("CharacterComics", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterComics {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("Loading render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterComics {...defaultProps} loading={true} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
