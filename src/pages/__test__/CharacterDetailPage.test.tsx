import { render } from "@testing-library/react";

import { mockUseParams } from "src/setupTests";
import { AppWrapper } from "src/__test__/test.utils";
import CharacterDetailPage from "../CharacterDetailPage";
import { LayoutProps } from "src/components/Layout/types";
import { CHARACTERS } from "src/mocks/mocks";

jest.mock("src/components/Layout/Layout", () => ({
  __esModule: true,
  default: ({ children }: LayoutProps) => <div>{children}</div>,
}));

jest.mock("src/components/CharacterDetail/CharacterDetail", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

describe("CharacterDetailPage", () => {
  test("Default render", () => {
    mockUseParams.mockReturnValue({ characterId: CHARACTERS[0].id });
    const wrapper = render(
      <AppWrapper>
        <CharacterDetailPage />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Invalid characterId param render", () => {
    mockUseParams.mockReturnValue({ characterId: undefined });
    const wrapper = render(
      <AppWrapper>
        <CharacterDetailPage />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
