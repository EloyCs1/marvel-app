import { render } from "@testing-library/react";
import CharacterCard from "../CharacterCard";
import { CHARACTERS } from "src/mocks/mocks";
import { AppWrapper } from "src/__test__/test.utils";
import { CharacterCardProps } from "../types";
import { IMAGE_NOT_AVAILABLE } from "src/service/constants";

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
});
