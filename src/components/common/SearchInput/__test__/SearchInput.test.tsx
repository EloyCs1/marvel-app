import { render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";

import { SearchInputProps } from "../types";
import SearchInput from "../SearchInput";

const defaultProps: SearchInputProps = {
  value: "",
  onChange: jest.fn(),
};

describe("SearchInput", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <SearchInput {...defaultProps} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Loading render", () => {
    const wrapper = render(
      <AppWrapper>
        <SearchInput {...defaultProps} loading={true} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("helpText render", () => {
    const wrapper = render(
      <AppWrapper>
        <SearchInput {...defaultProps} helpText={"helpText"} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("value and placeholder render", () => {
    const wrapper = render(
      <AppWrapper>
        <SearchInput {...defaultProps} value={"value"} placeholder={"placeholder"} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
