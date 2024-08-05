import { render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";
import NotFound from "../NotFound";
import { LayoutProps } from "src/components/Layout/types";

jest.mock("src/components/Layout/Layout", () => ({
  __esModule: true,
  default: ({ children }: LayoutProps) => <div>{children}</div>,
}));

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
