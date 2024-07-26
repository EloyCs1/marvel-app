import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import AppRouter from "./pages/AppRouter";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import messages, { DEFAULT_LOCALE, getLocales } from "./lang";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const navigatorLanguage = navigator.language.split(/[-_]/)[0];
const locale = getLocales().includes(navigatorLanguage) ? navigatorLanguage : DEFAULT_LOCALE;

root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale as keyof typeof messages]} defaultLocale={DEFAULT_LOCALE}>
      <AppRouter />
    </IntlProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
