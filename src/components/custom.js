import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ChromePicker } from 'react-color';

const { Option } = Select;

const CustomDemandsPage = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleSubmit = (values) => {
    console.log('Received values:', values);
    console.log('Selected color:', color);
    message.success('Custom order submitted successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>طلب مخصص</h1>
      <p>خصص الاداة التي تستخدمها حسب رغبتك</p>

      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="name"
          label="الاسم"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="الايميل"
          rules={[{ required: true, message: 'Please enter your email' }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="رقم الهاتف"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="productType"
          label="نوع المنتج"
          rules={[{ required: true, message: 'Please specify the product type' }]}
        >
            <Select placeholder="اختر المنتج ">
            <Option value="keyboard">لوحة مفاتيح</Option>
            <Option value="mouse">فأرة</Option>
            <Option value="headset">سماعة</Option>
            <Option value="mousepad">لوحة فأرة</Option>
            <Option value="controller">جهاز تحكم</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="specifications"
          label="المواصفات"
          rules={[{ required: true, message: 'Please provide the specifications' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="designPreferences"
          label="تفاصيل التصميم"
          rules={[{ required: true, message: 'Please provide design preferences' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="color"
          label="اللون المرغوب"
        > <Input value={color} disabled />
          <ChromePicker color={color} onChangeComplete={handleColorChange} />
        
        </Form.Item>
        <Form.Item
          name="material"
          label="مادة الصنع"
          rules={[{ required: true, message: 'Please specify the preferred material' }]}
        >
          <Select placeholder="اختر مادة">
            <Option value="plastic">بلاستيك</Option>
            <Option value="metal">معدن</Option>
            <Option value="wood">خشب</Option>
            <Option value="glass">زجاج</Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          name="wires"
          label="نوع الوصل"
          rules={[{ required: true, message: 'Please specify the wire requirements' }]}
        >
          <Select placeholder="اختر نوع الوصل">
            <Option value="wired">بالسلك</Option>
            <Option value="wireless">لاسلكي</Option>
          </Select>
        </Form.Item>
        <Form.Item name="qnt"   label="الكمية"  >
          <Input type='number'   />
        </Form.Item >
        <Form.Item
          name="file"
          label="اضف صورة او تصميم"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Upload name="file" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>اختر الملف</Button>
          </Upload>
        </Form.Item>
      
        <Form.Item>
          <Button type="primary" htmlType="submit">
           ارسل الطلب
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomDemandsPage;
