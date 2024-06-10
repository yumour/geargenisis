import { Card, Carousel, Image } from "antd";
import React from "react";
import Mouse from "../../assets/images/mouse1.jpg";
import Headset from "../../assets/images/headset1.jpg";
import Keyboard2 from "../../assets/images/keyboard_1.jpg";
import "../../assets/styles/Main.css"
const items = [
  {
    key: "1",
    title: "فأرة",
    content:
      "فأرة مريحة ودقيقة.",
    src: Mouse,
  },
  {
    key: "2",
    title: "سماعات عزل الضوضاء",
    content:
      "تجربة أفضل جودة صوت مع تكنولوجيا عزل الضوضاء.",
    src: Headset,
  },
  {
    key: "3",
    title: "لوحة مفاتيح ميكانيكية",
    content:
      "لوحة مفاتيح ميكانيكية عالية الجودة مع مفاتيح قابلة للتخصيص.",
    src: Keyboard2,
  },
];
const { Meta } = Card;

const AppHero = () => { 
  return (
    <div id="hero" className="heroBlock">
      
      <Carousel dotPosition="bottom" arrows  autoplay fade speed={1500} autoplaySpeed={3000}>
        {items.map((item) => {
          return (
            <div key={item.key} className="carousel-slide">
               <h2>المنتجات المميزة</h2>
              <Image
                src={item.src}
                preview={false}
                className="carousel-image"
                id="carousel-image"
                style={{ height:"80vh",objectFit: "cover"}}

              />
              <Card className="carousel-card">
             
                <Meta
                  title={item.title}
                  description={item.content}
                />
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default AppHero;
