import React from 'react';
import './App.css';
import HomePage from './views/Homepage';
import LoginPage from './views/Loginpage';
import ArticleDirectory from './views/ArticleDirectory';
import ArticleVorlage from './views/ArticleVorlage';
import ReiseMain from './views/ReiseMain';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Footer from './views/Footer';
import Navbar from './views/Navibar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ReiseHauptVorlage from './views/ReiseHauptVorlage';
import SearchBar from './views/SearchBar';
import NewsMainPage from './views/NewsMainPage';


function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

function App() {
  
  return (
    <Router>
      <div className="App">

        <Layout>

          <Routes>
            <Route path="/" element={<HomePage />} />       {/* mit dem TAG <  /> ist hier eine Komponente gerendert */}
            <Route path="/articles" element={<ArticleDirectory />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/articleVorlage" element={<ArticleVorlage />} />
            <Route path="/ReiseMain" element={<ReiseMain />} />
            <Route path="/ReiseLand" element={<ReiseHauptVorlage />} />
            <Route path="/NewsPage" element={<NewsMainPage/>} />

            {/* hier weitere Routen hinzufügen */}
          </Routes>

          <a href="#" className="top">
            <ArrowUpwardIcon />
          </a>

        </Layout>

      </div>
    </Router>
  );
}

export default App; //calling Components
