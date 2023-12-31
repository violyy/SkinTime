import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Skin Test : Best Active Ingredients for Your Skin',
    content: 'New to skincare? Have no idea what to use to improve your skin? This test will help you determine what is the best ingredients to help you with the troubles you have with your skin.',
  },
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className='content-bg-tp'>
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div className="btnHolder">
                    <Link to="/takethetest">
                      <button className='takethetest'>
                        Take the Test
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
