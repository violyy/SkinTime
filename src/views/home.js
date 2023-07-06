import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppWorks from '../components/home/works';


function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppWorks/>
    </div>
  );
}

export default AppHome;