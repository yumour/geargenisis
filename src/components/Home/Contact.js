import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const { TextArea } = Input;

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>تواصل معنا </h2>
          <p>اذا لديكم اي استفسارات الرجاء التواصل معنا </p>
          Geargenisis@gmail.com  <MailOutlined  style={{fontSize:"18px"}}/><br/>
          06-96-37-64-54  <PhoneOutlined  style={{fontSize:"18px"}}/>
  
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'رجاءا ادخل اسمك الكامل' 
              }]
            }
          >
            <Input placeholder="الاسم الكامل" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'ادخل بريدا يكون صحيحا',
              },
              {
                required: true,
                message: 'ادخل بريدك الالكتروني',
              },
            ]}
          >
            <Input placeholder="البريد الالكتروني"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="رقم الهاتف" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="الموضوع" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="الرسالة" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>اقبل شروط الاتستعمال</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              ارسل
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppContact;