import { IntlProvider } from "react-intl";
import { defaultFavoriteContextValue, FavoriteProvider } from "../context/FavoriteContext";
import messages, { DEFAULT_LOCALE } from "../lang";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};
export const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <IntlProvider
      locale={DEFAULT_LOCALE}
      messages={messages[DEFAULT_LOCALE as keyof typeof messages]}
      defaultLocale={DEFAULT_LOCALE}
    >
      <FavoriteProvider values={defaultFavoriteContextValue}>
        <BrowserRouter>{children}</BrowserRouter>
      </FavoriteProvider>
    </IntlProvider>
  );
};
