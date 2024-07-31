import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import "./styles.scss";

const NotFound = () => {
  const { formatMessage } = useIntl();
  return (
    <Layout>
      <div className="notFound">
        <p className="notFound__title">{formatMessage({ id: "notFound.title" })}</p>
        <p className="notFound__subTitle">{formatMessage({ id: "notFound.subTitle" })}</p>
        <p>{formatMessage({ id: "notFound.description" })}</p>
        <p>
          <strong>{formatMessage({ id: "notFound.betterLuck" })}</strong>
        </p>
        <Link to={"/"}>Marvel Home</Link>
      </div>
    </Layout>
  );
};
export default NotFound;
