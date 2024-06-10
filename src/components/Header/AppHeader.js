import "./AppHeader.scss";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import MainMenu from "../Menu/MainMenu";
import SearchBox from "../SearchBox";
import { Avatar, Typography } from "antd";
import Logo from "../../assets/images/logo.svg";

function AppHeader() {
  return (
    <div className="appHeader">
      <div className="menuHeader">
        <MainMenu />
      </div>
      <div className="appTitle">
        <Link to="/">
          <Typography.Title>Gear Genisis <Avatar src={Logo}/></Typography.Title>
    
        </Link>
      </div>
      <div className="rightHeader">
        <div className="searchCard">
          <SearchBox />
        </div>

        <div className="shoppingCart">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
