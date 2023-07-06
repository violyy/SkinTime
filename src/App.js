import React, { useEffect, useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';
import TakeTheTest from './views/takethetest';
import AppAbout from './views/works';
import AppContact from './views/contact';
import AppLogin from './views/login';
import ExpertSystem from './views/expertsystem';
import axios from 'axios';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  const [gejala, setGejala] = useState([]);
  const [diagnosis, setDiagnosis] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/gejala')
      .then((response) => {
        setGejala(response.data);
      })
      .catch((error) => {
        console.error('Error fetching gejala:', error);
      });

    axios
      .get('http://localhost:3000/api/diagnosis') 
      .then((response) => {
        setDiagnosis(response.data);
      })
      .catch((error) => {
        console.error('Error fetching diagnosis:', error);
      });

    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader isLoggedIn={isLoggedIn} />
      </Header>
      <Content>
      <Routes>
  <Route path="/" element={<AppHome />} />
  <Route path="/takethetest" element={<TakeTheTest />} />
  <Route path="/works" element={<AppAbout />} />
  <Route path="/contact" element={<AppContact />} />
  <Route path="/login" element={<AppLogin setIsLoggedIn={setIsLoggedIn} />} />
  {isLoggedIn ? (
    <>
      <Route path="/expertsystem" element={<ExpertSystem gejala={gejala} diagnosis={diagnosis} />} />
    </>
  ) : (
    <Route path="/expertsystem" element={<Navigate to="/login" />} />
  )}
</Routes>

      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
