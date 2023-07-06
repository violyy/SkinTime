import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Drawer, Button } from 'antd';
import logon from '../../assets/images/logo.png';

const { Link: AnchorLink } = Anchor;

function AppHeader({ isLoggedIn }) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img src={logon} alt="Logo-n" className="logo-n" />
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <AnchorLink href="/" title="Home" />
            <AnchorLink href="/works" title="About" />
            <AnchorLink href="/contact" title="Contact" />
            {isLoggedIn ? (
              <Link to="/login">
                <button className="btnheader-login">My Account</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btnheader-login">Login</button>
              </Link>
            )}
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <AnchorLink href="/" title="Home" />
              <AnchorLink href="/works" title="About" />
              <AnchorLink href="/contact" title="Contact" />
            </Anchor>
            {isLoggedIn ? (
              <Link to="/login">
                <button className="btnheader-login2">My Account</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btnheader-login2">Login</button>
              </Link>
            )}
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
