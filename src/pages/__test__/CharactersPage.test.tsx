import { render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";
import CharactersPage from "../CharactersPage";

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
