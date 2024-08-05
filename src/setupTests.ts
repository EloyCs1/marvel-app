// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

export const mockHistoryPush = jest.fn();
export const mockHistoryGoBack = jest.fn();
export const mockHistoryReplace = jest.fn();
export const mockLocation = jest.fn();
export const mockNavigate = jest.fn();
export const mockUseParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
    replace: mockHistoryReplace,
    goBack: mockHistoryGoBack,
  }),
  useLocation: () => mockLocation,
  useParams: mockUseParams,
  useNavigate: () => mockNavigate,
}));
