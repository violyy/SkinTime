import React from 'react';


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
      <div id="works" className="block worksBlock2">
        <div className="container-fluid">
          <div className="titleHolder4">
            <div className="titleHolder2">
          <h2>About Us</h2>
        </div>
            <div className="contentHolder">
              <div className='works-p-center'>
              <p>SkinTime is a website that is created to help satisfy people's needs on finding
                the right ingredients for their skin concerns. The test's results was carefully discussed
                with a guidance from a dermatologist. Our goals is to help people reduce the risks of using
                  products that may worsen skin condition and improve skin by using the right skincare ingredients. This website was created by Violy Lislianty Puisetya. A student in her last semester pursuing a degree in Information Technology.</p>
                <div className='aboutus-verse'>
                <p>"And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him."</p>
                  <p className='bibleverse'>Colossians 3:17</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppWorks;