import { render } from "@testing-library/react";
import ErrorComponent from "../ErrorComponent";

import { AppWrapper } from "src/__test__/test.utils";

describe("ErrorComponent", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <ErrorComponent />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("tryAgain render", () => {
    const tryAgain = jest.fn();
    const wrapper = render(
      <AppWrapper>
        <ErrorComponent tryAgain={tryAgain} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
