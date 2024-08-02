import { render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";
import NotFound from "../NotFound";

describe("NotFound", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <NotFound />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
