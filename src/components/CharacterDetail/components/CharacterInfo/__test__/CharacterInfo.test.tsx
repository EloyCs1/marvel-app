import { render } from "@testing-library/react";
import { CHARACTER } from "src/mocks/mocks";
import { AppWrapper } from "src/test/test.utils";
import { CharacterInfoProps } from "../types";
import CharacterInfo from "../CharacterInfo";

const defaultProps: CharacterInfoProps = {
  detail: CHARACTER,
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
