import Icon from "../../../common/Icon/Icon";
import { IconName } from "../../../common/Icon/types";
import "./styles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img width="130" height="52" src={`${process.env.PUBLIC_URL}/marvel-logo.jpg`} alt="logo" />
      <div className="navbar__favorites">
        <Icon name={IconName.FAVORITES_FILLED} />
        <p>{0}</p>
      </div>
    </div>
  );
};
export default Navbar;
