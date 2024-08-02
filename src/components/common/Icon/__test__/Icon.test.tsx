import { render } from "@testing-library/react";

import { AppWrapper } from "src/__test__/test.utils";
import Icon from "../Icon";
import { IconName } from "../types";

describe("Icon", () => {
  test("FAVORITES_FILLED render", () => {
    const wrapper = render(
      <AppWrapper>
        <Icon name={IconName.FAVORITES_FILLED} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("FAVORITES_OUTLINED render", () => {
    const wrapper = render(
      <AppWrapper>
        <Icon name={IconName.FAVORITES_OUTLINED} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("MARVEL_LOGO render", () => {
    const onClick = jest.fn();
    const wrapper = render(
      <AppWrapper>
        <Icon name={IconName.MARVEL_LOGO} onClick={onClick} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("SEARCH render", () => {
    const wrapper = render(
      <AppWrapper>
        <Icon name={IconName.SEARCH} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("SPINNER render", () => {
    const wrapper = render(
      <AppWrapper>
        <Icon name={IconName.SPINNER} />
      </AppWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
