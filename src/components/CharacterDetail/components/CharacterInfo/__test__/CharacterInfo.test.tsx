import { render } from "@testing-library/react";
import { CHARACTERS } from "src/mocks/mocks";
import { AppWrapper } from "src/__test__/test.utils";
import { CharacterInfoProps } from "../types";
import CharacterInfo from "../CharacterInfo";

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
});
