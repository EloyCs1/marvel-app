import { render } from "@testing-library/react";
import { COMICS } from "src/mocks/mocks";
import { AppWrapper } from "src/test/test.utils";
import { CharacterComicProps } from "../types";
import CharacterComic from "../CharacterComic";

const defaultProps: CharacterComicProps = {
  comic: COMICS[0],
};

describe("CharacterComic", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterComic {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("Empty onsaleDate render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterComic comic={{ ...defaultProps.comic, onsaleDate: NaN }} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
