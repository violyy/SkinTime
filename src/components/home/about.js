import React from 'react';

import { Row, Col } from 'antd';


const items = [
  {
    key: '1',
    icon: <i className="fas fa-user-md"></i>,
    title: 'Dermatologist Approved',
    content: 'Find out the best skincare ingredients with SkinTime that was created with advice and guidance from a dermatologist.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Simple Test',
    content: "Short test that would help you find the best skincare ingredients and won't take much of your time in your busy schedule. ",
  },
  {
    key: '3',
    icon: <i className="fas fa-headset"></i>,
    title: 'Support',
    content: 'Dedicated support will be given to test taker who have any questions regarding the website, feel free to hit us on email.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <Row gutter={[16, 16]}>   
          {items.map(item => {
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
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;