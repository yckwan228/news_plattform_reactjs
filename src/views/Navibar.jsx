
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../materials/logo.png';
import '/Users/terrykwan/Documents/neues-react-projekt/src/App.css';
import React, { useState, useEffect, useRef } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LoginIcon from '@mui/icons-material/Login';
import NewspaperIcon from '@mui/icons-material/Newspaper';



function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navbarRef = useRef(null);  // Ref for the navbar



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {   /* useEffect ist ein Hook aus der REACT Bibliothek, das Nebeneffekte in funktionskomponenten ausführen kann */
    const handleScroll = () => {
      if (navbarRef.current) {
        const sticky = navbarRef.current.offsetTop;
        if (window.pageYOffset >= sticky) {
          navbarRef.current.classList.add("sticky");
        } else {
          navbarRef.current.classList.remove("sticky");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Die leere Array [] am Ende bedeutet, dass dieser Effekt nur einmal ausgeführt wird

  return (

    <div>

      <div className="hamburger-icon" id="navbar" ref={navbarRef}>

        {windowWidth <= 768 && (
          <>
            <button onClick={() => setIsOpen(!isOpen)}>☰</button>

            {isOpen && (
              <ul>

                <div className='navPanel'>

                  <li>
                    <a href="/">
                      <HomeIcon className="nav-icon" />
                      <span className="nav-text">主頁</span>
                    </a>
                  </li>

                  <li>
                    <a href="/articles">
                      <ArticleIcon className="nav-icon" />
                      <span className="nav-text">所有文章</span>
                    </a>
                  </li>

                  <li>
                    <a href="/newsPage">
                      <NewspaperIcon className="nav-icon" />
                      <span className="nav-text">新聞主頁</span>
                    </a>
                  </li>

                  <li>
                    <a href="/ReiseMain">
                      <FlightTakeoffIcon className="nav-icon" />
                      <span className="nav-text">旅行人生</span>
                    </a>
                  </li>

                  <li>
                    <a href="/login">
                      <LoginIcon className="nav-icon" />
                      <span className="nav-text">登入</span>
                    </a>
                  </li>
                </div>


              </ul>
            )}

          </>
        )}


      </div>


      <nav className="main-menu">
        <ul>

          <li>
            <a href="/">
              <HomeIcon className="nav-icon" />
              <span className="nav-text">主頁</span>
            </a>
          </li>

        </ul>

        

        <ul>
          <li>
            <a href="/articles">
              <ArticleIcon className="nav-icon" />
              <span className="nav-text">所有文章</span>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/newsPage">
              <NewspaperIcon className="nav-icon" />
              <span className="nav-text">新聞主頁</span>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/ReiseMain">
              <FlightTakeoffIcon className="nav-icon" />
              <span className="nav-text">旅行人生</span>
            </a>
          </li>
        </ul>

        <ul className='nav-login'>
          <li>
            <a href="/login">
              <LoginIcon className="nav-icon" />
              <span className="nav-text">登入</span>
            </a>
          </li>
        </ul>



      </nav>
    </div>



  )
}

export default Navbar;



/* 

<ul>
        <li>
          <a href="/">
            <i className="fa fa-home nav-icon"></i>
            <span className="nav-text">主頁</span>
          </a>
        </li>
        <li>
          <a href="/articles">
            <i className="fa fa-bell nav-icon"></i>
            <span className="nav-text">文章</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-envelope nav-icon"></i>
            <span className="nav-text">旅行人生</span>
          </a>
        </li>
</ul>

      <ul className='nav-login'>

        <li>
          <a href="/login">
            <i className="fa fa-cogs nav-icon"></i>
            <span className="nav-text">登入</span>
          </a>
        </li>


      </ul>








*/

/* 
 <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
        <img src={logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./IndividuelleSeite.html">主頁</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Unterseite_Ueberblick.html">文章</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                旅行人生
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="./Unterseite_Asien.html">德國</a></li>
                <li><a className="dropdown-item" href="./Unterseite_Afrika.html">東歐</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="./Unterseite_Blog.html">全部見聞</a></li>
              </ul>
            </li>
       
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="尋找" aria-label="尋找" />
            <button className="btn" type="submit">GO</button>
          </form>
        </div>
      </div>
    </nav>
  );
*/