import { render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";
import CharactersPage from "../CharactersPage";
import { LayoutProps } from "src/components/Layout/types";

jest.mock("src/components/Layout/Layout", () => ({
  __esModule: true,
  default: ({ children }: LayoutProps) => <div>{children}</div>,
}));

jest.mock("src/components/CharacterList/CharacterList", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

describe("CharactersPage", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharactersPage />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
