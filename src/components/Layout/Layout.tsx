import React from "react";

import { Link, useNavigate } from "react-router-dom";
import Icon from "src/components/common/Icon/Icon";
import { IconName } from "src/components/common/Icon/types";
import { useFavorites } from "src/context/FavoriteContext";
import { LayoutProps } from "./types";
import "./styles.scss";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const testId = "layout";
  const navigate = useNavigate();
  const { favoriteIds, toggleFavoriteFilter } = useFavorites();

  const onClickLogo = () => {
    toggleFavoriteFilter(false);
  };

  const onClickIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavoriteFilter(true);
    navigate("/");
  };

  return (
    <>
      <div className="navbar" data-testid={`${testId}-navbar`}>
        <Link data-testid={`${testId}-link`} to={"/"} onClick={onClickLogo}>
          <Icon testId={`${testId}-logo`} width={130} height={52} name={IconName.MARVEL_LOGO} />
        </Link>
        <div className="navbar__favorites">
          <Icon testId={`${testId}-icon`} name={IconName.FAVORITES_FILLED} onClick={onClickIcon} />
          <p data-testid={`${testId}-count`}>{favoriteIds.length}</p>
        </div>
      </div>
      <div className="layout__content" data-testid={`${testId}-content`}>
        {children}
      </div>
    </>
  );
};
export default Layout;
