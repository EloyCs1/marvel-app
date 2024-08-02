import { render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";
import Loader from "../Loader";

describe("Loader", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <Loader />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
