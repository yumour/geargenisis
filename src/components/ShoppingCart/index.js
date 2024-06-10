import { Avatar, Badge, Button, List, Popover, Typography } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { removeCartItem } from "../../utils";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const navigator = useNavigate();
  const [popovervisible, setPopovervisible] = useState(false);

  useEffect(() => {
    const cartHistory = JSON.parse(localStorage.getItem("order"));
    if (!!cartHistory) {
      console.log(
        "🚀 ~ file: index.js:16 ~ useEffect ~ cartHistory:",
        cartHistory
      );
      setCartItems([...cartHistory]);
    }
  }, []);

  useEffect(() => {
    if (!!cartItems) localStorage.setItem("order", JSON.stringify(cartItems));
    else localStorage.setItem("order", "");
  }, [cartItems]);

  const handleCheckoutSubmit = () => {
    navigator("/cart");
    setPopovervisible(false);
  };

  const CartHolder = () => {
    const handleRemoveCartItem = (item) => {
      const newCartItems = removeCartItem(cartItems, item);
      setCartItems(newCartItems);
    };

    return (
      <div className="cartHolder">
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          style={{
            width: "400px",
            maxWidth: "80vw",
            maxHeight: "50vh",
            overflowY: "auto",
          }}
          size="large"
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`${item.thumbnail}`} size={"small"} />}
                title={<a href="/">{item.title}</a>}
                description={
                  <Typography.Text type="danger" strong>
                    {item.quantity} x ${item.price}
                  </Typography.Text>
                }
              />
              <div
                className="removeCartItem"
                onClick={() => handleRemoveCartItem(item)}
              >
                <DeleteOutlined style={{ color: "red" }} />
              </div>
            </List.Item>
          )}
        />

        <Button
          type="primary"
          onClick={() => handleCheckoutSubmit()}
          className="checkOutBtn"
        >
      الدفع
        </Button>
      </div>
    );
  };

  const handlePopoverChange = (newOpen) => {
    setPopovervisible(newOpen);
  };

  return (
    <>
      <Popover
        placement="bottomRight"
        title={"سلة التسوق"}
        content={<CartHolder />}
        trigger="click"
        open={popovervisible}
        onOpenChange={handlePopoverChange}
      >
        <Badge count={cartItems.length || 0}>
          <ShoppingCartOutlined className="shoppingCardIcon" />
        </Badge>
      </Popover>
    </>
  );
};

export default ShoppingCart;
