import { useIntl } from "react-intl";

import { ErrorComponentProps } from "./types";
import "./styles.scss";

const ErrorComponent: React.FC<ErrorComponentProps> = ({ testId = "errorComponent", tryAgain }) => {
  const { formatMessage } = useIntl();
  return (
    <div className="errorComponent" data-testid={testId}>
      <p className="errorComponent__title">{formatMessage({ id: "errorComponent.title" })}</p>
      <p className="errorComponent__subTitle">{formatMessage({ id: "errorComponent.subTitle" })}</p>
      {tryAgain && (
        <a onClick={tryAgain} data-testid={`${testId}-tryAgain`}>
          {formatMessage({ id: "errorComponent.tryAgain" })}
        </a>
      )}
    </div>
  );
};
export default ErrorComponent;
