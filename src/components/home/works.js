import React from 'react';

// import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder3">
            <div className="titleHolder2">
          <h2>About Us</h2>
        </div>
        <div className="contentHolder">
          <p>SkinTime is a website that is created to help satisfy people's needs on finding the right ingredients for their skin concerns. The test's results was carefully discussed with a guidance from a dermatologist. Our goals is to help people reduce the risks of using products that may worsen skin condition and improve skin by using the right skincare ingredients.</p>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppWorks;