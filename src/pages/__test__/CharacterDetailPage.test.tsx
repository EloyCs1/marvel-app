import { render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";
import CharacterDetailPage from "../CharacterDetailPage";

describe("CharacterDetailPage", () => {
  test("Default render", () => {
    const wrapper = render(
      <AppWrapper>
        <CharacterDetailPage />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
