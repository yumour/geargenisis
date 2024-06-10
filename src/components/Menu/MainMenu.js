import { Button, Menu, Drawer} from "antd";
import { HomeOutlined, MenuOutlined, ShoppingOutlined, ToolOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnScreen from "../../utils";
const MainMenu = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("home");
  const menuBtnRef = useRef(null);

  const onClick = (e) => {
    setCurrent(e.key);
    setVisible(false);
    // navigator(`/${e.key}`);
  };

  const menuMobile = [
    {
      label: <NavLink to="/">الرئيسية</NavLink>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <NavLink  id={"productsub"}  to="/products/">المتجر</NavLink>,
      key: "products",
      icon: <ShoppingOutlined />,
      
      children: [
        {
          label: (
            <NavLink to="/products/categories/mouses"> الفأرة ولوحة الفأرة</NavLink>
          ),
          key: "mouses",
        },
        {
          label: (
            <NavLink to="/products/categories/keyboards"> لوحات المفاتيح</NavLink>
          ),
          key: "keyboards",
        },
        {
          label: (
            <NavLink to="/products/categories/controllers"> اجهزة تحكم والواح العاب</NavLink>
          ),
          key: "controllers",
        },
        {
          label: (
            <NavLink to="/products/categories/headsets">سماعات الرأس</NavLink>
          ),
          key: "headsets",
        },
      ]
    },
    {
      label: <NavLink to="/custom">طلب خاص</NavLink>,
      key: "custom",
      icon: <ToolOutlined  />,
    },
  ];

  const menuLgScreen = [
   
    ...menuMobile,
  ];

  const MenuShowing = ({ mode = "horizontal", visible = true, menuItems }) => {
    return visible ? (
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        defaultOpenKeys={[]}
        mode={mode}
        items={menuItems}
        theme="light"
        className="mainMenu"
        multiple={false}
      />
    ) : (
      <></>
    );
  };

  const menuBtnVisible = useOnScreen(menuBtnRef);

  return (
    <>
      <MenuShowing visible={!menuBtnVisible} menuItems={menuLgScreen} />
      <Button
        className="menuBtn"
        type="dashed"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
        ref={menuBtnRef}
      />
      <Drawer
        title="Gear Genisis"
        placement="left"
        onClose={() => setVisible(false)}
        open={visible}
      >
        <MenuShowing mode="inline" menuItems={menuMobile} />
      </Drawer>
    </>
  );
};

export default MainMenu;
