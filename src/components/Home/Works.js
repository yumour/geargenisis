import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const AppWorks = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>كيف نعمل ؟</h2>
          <p>اطلع على آلية عمل شركتنا </p>
          </div>
          <div className="contentHolder">
          <Button type="primary" onClick={showModal}>
            <i className="fas fa-play"/>
          </Button>
          </div>
          <Modal 
            title="كيف نعمل ؟"
            visible={isModalVisible} 
            onCancel={handleCancel}
            footer={null}
            width={1000}
            keyboard={true}
          >
          <iframe width="950" height="500" src="https://www.youtube.com/embed/RVNfLKS_iiw" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </Modal>
      </div>
    </div>
  );
};

export default AppWorks;