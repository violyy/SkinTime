import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'SKIN TEST',
  },
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock2">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className='content-bg-tp2'>
                <div className="content">
                  <h3>{item.title}</h3>
                  <h6>Best Skincare Ingredients for Your Skin</h6>
                  <p>This test will take about 3-5 minutes</p>
                  <p>Language : Indonesian</p>
                  <p className='kecilinukuran'> This test will help determine the best active ingredients that works well
                   with your skin concern. Please answer truthfully as it may cause another skin problem if don’t.</p>
                    
                  <div className="btnHolder">
                    <Link to="/expertsystem">
                      <button className='takethetest'>
                        Start
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
