import { LoaderProps } from "./types";
import "./styles.scss";

const Loader: React.FC<LoaderProps> = ({ testId = "loader" }) => {
  return (
    <div className="loader" data-testid={testId}>
      <span className="loader__spinner" data-testid={`${testId}-spinner`}></span>
    </div>
  );
};
export default Loader;
