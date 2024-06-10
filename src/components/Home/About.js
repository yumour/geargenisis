import { Col, Image, Row } from 'antd';
import React from 'react';
import Logo from '../../assets/images/logo_1.png'
import { BulbTwoTone, CheckCircleTwoTone, SmileTwoTone } from '@ant-design/icons';
import  "../../assets/styles/login.scss"
const items = [
  {
    key: '1',
    icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    title: 'الجودة',
    content: ' نحن ملتزمون بتقديم منتجات عالية الجودة تلبي توقعات عملائنا',
  },
  {
    key: '2',
    icon: <BulbTwoTone twoToneColor="orange"/>,
    title: 'الإبداع',
    content: 'نحن نبتكر دائمًا ونبحث عن حل أفضل',
  },
  {
    key: '3',
    icon: <SmileTwoTone />,
    title: 'الشفافية',
    content: ' نحن نتعامل مع عملائنا بنزاهة وصدق',
  },
]

function AppAbout() {

  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>من نحن ؟ </h2>   
          <Image src={Logo} id='image' style={{width: "12vw", height:"25vh"}}  preview={false}/>
          <p>شركة Gear Genesis لملحقات الكمبيوتر</p>
        </div>
        <div className="contentHolder">
          <p>نحن شركة ملحقات الكمبيوتر، ونسعى لتحسين تجربة استخدام الأجهزة الشخصية. تأسست شركتنا على يد مجموعة من المهندسين المبدعين وعشاق التكنولوجيا. نحن نؤمن بأن الأدوات الجيدة تجعل الحياة أكثر سهولة ومتعة.</p>
          <p>نسعى لتقديم ملحقات عالية الجودة تلبي احتياجات المستخدمين وتحسن أدائهم. نريد أن نكون الشركة الرائدة في هذا المجال، معتمدين على الابتكار والتصميم العصري.
</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default AppAbout;