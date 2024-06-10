import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../services";
import {
  Button,
  Col,
  Image,
  Input,
  Rate,
  Row,
  Skeleton,
  Space,
  Typography,
  message,
} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./Product.scss";
import {
  addCartItem,
  addCartItems,
  makeUpLabel,
} from "../../utils";
import { AppContext } from "../../context";

function Product() {
  const [product, setProduct] = useState();
  const [cartQty, setCartQty] = useState(1);
  const [loadingCheckOut, setLoadingCheckOut] = useState(false);
  const [loadingAddToCart, setLoadingAddToCart] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const { cartItems, setCartItems } = useContext(AppContext);
  const navigator = useNavigate();

  const params = useParams();
  const key = params.productId;
  useEffect(() => {
    setFetchingData(true);
    getSingleProduct(key).then((resp) => {
      console.log("🚀 ~ file: index.js:13 ~ getSingleProduct ~ resp:", resp);
     
        setProduct(resp);
        setFetchingData(false)
    });
  }, []);

  const handleAddToCart = () => {
    setLoadingAddToCart(true);

    message.success(`${product.title} has been added to cart 👌`);
    let addedItems = Array.from({ length: cartQty }, () => product);
    console.log(
      "🚀 ~ file: index.js:50 ~ handleAddToCart ~ addedItems:",
      addedItems
    );

    let newCartItems = addCartItems(cartItems, addedItems);
    setCartItems(newCartItems);
    setTimeout(() => {
      setLoadingAddToCart(false);
    }, 1500);
  };

  const handleCheckout = () => {
    setLoadingCheckOut(true);

    message.success(`${product.title} has been added to cart 👌`);
    let newCartItems = addCartItem(cartItems, product);
    setCartItems(newCartItems);
    setTimeout(() => {
      setLoadingCheckOut(false);
      navigator("/cart");
    }, 1500);
  };

  return (
    <>
      {!fetchingData && !!product ? (
        <Row gutter={[8, 16]} wrap>
          <Col flex={2} xs={0} sm={0} md={10}>
            <div className="productInfoLeftPanel">
              <div className="mainThumbnail">
                <Image src={product.thumbnail} width={200} />
              </div>
              <div className="imageGallery">
                <Image.PreviewGroup
                  preview={{
                    onChange: (current, prev) =>
                      console.log(
                        `current index: ${current}, prev index: ${prev}`
                      ),
                  }}
                >
                  <Space size={"middle"}>
                    {product.images.map((img, index) => (
                      <Image src={img} width={50} key={index} />
                    ))}
                  </Space>
                </Image.PreviewGroup>
              </div>
            </div>
          </Col>
          <Col flex={3} sm={24} md={14}>
            <div className="productInfoRightPanel">
              <Typography.Title level={3}>{product.title}</Typography.Title>
              <div className="productRating">
                <Space>
                  <Rate value={product.rating} allowHalf disabled></Rate>
                  <Typography.Text strong>بيعت {product.stock}</Typography.Text>
                </Space>
              </div>
              <div className="productPrice">
                السعر:{" "}
                <span className="spanPrice">
                  DA
                  {parseFloat(
                    (product.price * (100 - product.discountPercentage)) / 100
                  ).toFixed(0)}
                </span>{" "}
                <Typography.Text
                  style={{
                    background: "Green",
                    color: "yellow",
                    padding: "0 1px",
                    borderRadius: "4px",
                    fontSize: "1rem",
                  }}
                >
                  {parseFloat(product.discountPercentage).toFixed(0)}% OFF
                </Typography.Text>{" "}
                <Typography.Text
                  delete
                  strong
                  type="secondary"
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  DA{" "}{product.price}
                </Typography.Text>
              </div>
              <div className="productMeta">
                <div className="productMetaRow">
                  <span className="productMetaLeft">النوع : {' '}</span>
                  <span className="productMetaRight">
                    <Link to={`/products/categories/${product.category}`}>
                      {makeUpLabel(product.category)}
                    </Link>
                  </span>
                </div>
                <div className="productMetaRow">
                  <span className="productMetaLeft">التوصيل : {' '}</span>
                  <span className="productMetaRight">مجاني توصيل📦</span>
                </div>
                <div className="productMetaRow">
                  <span className="productMetaLeft">الضمان : {' '}</span>
                  <span className="productMetaRight">✅12 شهر ضمان </span>
                </div>
                <div className="productMetaRow">
                  <span className="productMetaLeft">التصنيفات : {' '}</span>
                  <span className="productMetaRight">{' '}{product.tags.join(", ")}</span>
                </div>
                <div className="productMetaRow">
                  <span className="productMetaLeft">الكمية{' '}</span>
                  <div className="productMetaRight">
                    <Button
                      onClick={() => setCartQty(cartQty > 0 ? cartQty - 1 : 0)}
                      className="updownQty"
                    >
                      <MinusOutlined />
                    </Button>
                    <Input value={cartQty} min={0} className="cartQty" />
                    <Button
                      onClick={() => setCartQty(cartQty + 1)}
                      className="updownQty"
                    >
                      <PlusOutlined />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="productDesc">
                <Typography.Text strong> {product.description}</Typography.Text>
              </div>

              <div className="addToCart">
                <Space>
                  <Button
                    type="primary"
                    onClick={handleAddToCart}
                    loading={loadingAddToCart}
                  >
                    اضف الى السلة
                  </Button>
                  <Button
                    type="primary"
                    danger
                    onClick={handleCheckout}
                    loading={loadingCheckOut}
                  >
                    الدفع
                  </Button>
                </Space>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Row gutter={[8, 16]} wrap>
          <Col flex={2} xs={0} sm={0} md={10}>
            <div className="productInfoLeftPanel">
              <div className="mainThumbnail">
                <Skeleton.Image active style={{ width: "200px" }} />
              </div>
              <div className="imageGallery">
                <Space size={"middle"}>
                  <Skeleton.Image
                    active
                    style={{ width: "50px", height: "25px" }}
                  />
                  <Skeleton.Image
                    active
                    style={{ width: "50px", height: "25px" }}
                  />
                  <Skeleton.Image
                    active
                    style={{ width: "50px", height: "25px" }}
                  />
                  <Skeleton.Image
                    active
                    style={{ width: "50px", height: "25px" }}
                  />
                </Space>
              </div>
            </div>
          </Col>
          <Col flex={3} sm={24} md={14}>
            <div className="productInfoRightPanel">
              <Skeleton.Input active size={"default"} />
              <div className="productRating">
                <Space>
                  <Skeleton.Input active size={"small"} />
                  <Skeleton.Input active size={"small"} />
                </Space>
              </div>
              <div className="productPrice">
                <Skeleton.Input active size={"default"} />
              </div>
              <div className="productMeta">
                <Skeleton
                  paragraph={{
                    rows: 3,
                  }}
                  active
                />
              </div>
              <div className="productDesc">
                <Skeleton
                  paragraph={{
                    rows: 1,
                  }}
                  active
                />
              </div>
              <div className="addToCart">
                <Space>
                  <Skeleton.Button active />
                  <Skeleton.Button active />
                </Space>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}

export default Product;
