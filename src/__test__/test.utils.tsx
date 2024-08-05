import { IntlProvider } from "react-intl";
import { defaultFavoriteContextValue, FavoriteProvider } from "../context/FavoriteContext";
import messages, { DEFAULT_LOCALE } from "../lang";
import { BrowserRouter } from "react-router-dom";
import { FavoriteContextValue } from "src/context/types";

type Props = {
  children?: React.ReactNode;
  valuesFavoriteProvider?: FavoriteContextValue;
};
export const AppWrapper: React.FC<Props> = ({ children, valuesFavoriteProvider = defaultFavoriteContextValue }) => {
  return (
    <IntlProvider
      locale={DEFAULT_LOCALE}
      messages={messages[DEFAULT_LOCALE as keyof typeof messages]}
      defaultLocale={DEFAULT_LOCALE}
    >
      <FavoriteProvider values={valuesFavoriteProvider}>
        <BrowserRouter>{children}</BrowserRouter>
      </FavoriteProvider>
    </IntlProvider>
  );
};
