import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../materials/logo.png';
import '/Users/terrykwan/Documents/neues-react-projekt/src/App.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../views/Homepage.jsx'; 

function Footer() {
    return (

      /* HTML Bootstrap code für Footer */

      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>其他平台：</span>
        </div>

        <div className='social-buttons'>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                國際廢青
              </h6>
              <p>
               咩都講下啦，咩都半桶水咁
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>網頁導航</h6>
              <p>
                <a href='#!' className='text-reset'>
                  主頁
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  文章
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  關於我地
                </a>
              </p>

            </MDBCol>

            
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className='text-reset fw-bold' href=''>
        </a>
      </div>
    </MDBFooter>

    );
  
}
    
export default Footer;