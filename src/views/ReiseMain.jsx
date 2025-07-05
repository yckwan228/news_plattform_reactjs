import React, { useState, useEffect } from 'react';
import '../style/ReiseMain.css'; // Importieren Sie einen CSS-Style, wenn Sie einen haben.
import textboxbild1 from '../materials/Home/Auschwitz-min.jpg';
import textboxbild2 from '../materials/Home/Am Ufer-min.jpg';
import textboxbild3 from '../materials/Home/Maidan.jpg';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function ReiseMain() {

    const [title, setTitle] = useState('旅遊人生');

    useEffect(() => {
        document.title = title;
    }, [title]);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Ein EventListener, um die Fenstergröße zu überwachen
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup, um den EventListener zu entfernen, wenn die Komponente nicht mehr gerendert wird
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (

        <div className='Reisen'>

            {/* Page Heading */}

            < div className='PageHeading' >
                <div className='PageHeadingText'>

                    <h1 className='heading_text'>{title}</h1>

                </div>
                <hr className="featurette-divider" />
            </div >

            {/* Beginn Bilder Carousel */}

            <div>

                {windowWidth <= 768 ? (

                    <div className='BilderCarousel'>

                        <div id="carouselExampleIndicators" className="carousel slide">

                            <div className="carousel-indicators" id='indicators'>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

                            </div>

                            <div className="carousel-inner">

                                <div className="carousel-item active" id="carouselBild">

                                    <div className='image-container mx-3'>
                                        <a href="/">
                                            <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>

                                <div className="carousel-item  " id="carouselBild">

                                    <div className='image-container mx-3'>
                                        <a href="/">
                                            <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>

                                <div className="carousel-item " id="carouselBild">

                                    <div className='image-container mx-3'>
                                        <a href="/">
                                            <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <button className="carousel-control-prev" id='prev' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <ArrowLeftIcon id="prevIcon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" id='next' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <ArrowRightIcon id="nextIcon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>


                        </div>
                    </div>

                ) : (

                    <div className='BilderCarousel'>

                        <div id="carouselExampleIndicators" className="carousel slide">

                            <div className="carousel-indicators" id='indicators'>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>


                            <div className="carousel-inner">   {/* row, bilder nebeneinander */}

                                <div className="carousel-item active" id="carouselBild">

                                    <div className='image-container'>
                                        <a href="/">
                                            <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className='image-container'>
                                        <a href="/">
                                            <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className='image-container'>
                                        <a href="/">
                                            <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>

                                <div className="carousel-item" id="carouselBild">

                                    <div className=' image-container'>
                                        <a href="/">
                                            <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className=' image-container'>
                                        <a href="/">
                                            <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className=' image-container'>
                                        <a href="/">
                                            <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>

                                <div className="carousel-item" id="carouselBild">

                                    <div className='image-container'>
                                        <a href="/">
                                            <img src={textboxbild3} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className=' image-container'>
                                        <a href="/">
                                            <img src={textboxbild3} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className='image-container'>
                                        <a href="/">
                                            <img src={textboxbild3} alt="Beschreibung des ersten Bildes" />
                                            <div className='caption'>
                                                <h3 className='caption_titel'>基輔</h3>
                                                <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>



                            </div>

                            <button className="carousel-control-prev" id='prev' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <ArrowLeftIcon id="prevIcon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" id='next' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <ArrowRightIcon id="nextIcon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>

                        </div>

                    </div>

                )}
            </div>
            {/* Ende Bilder Carousel */}


            {/* Beginn SubHeading*/}

            <div className='subHeading'>

                <h3 className='subheading_text'>最近分享</h3>

            </div>


            {/* Beginn Text-Carousel */}

            <div className='text_box'>    {/* in column */}
                <div className='row'>

                <div className='inhalte'>
                    
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 inhalte_text'>
                            <h5>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去，洲龍集加。氣下克法她目大東學小……更動清造。</h5>
                        </div>

                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 inhalte_bild'>
                            <img src={textboxbild1} className="image-content" alt="Bildbeschreibung" />
                        </div>
           
                </div>

                <hr className="featurette-divider" />

                <div className='inhalte'>          {/* in row */}
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 inhalte_text'>
                        <h5>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去，洲龍集加。</h5>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 inhalte_bild'>
                        <img src={textboxbild2} className="image-content" alt="Bildbeschreibung" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className='inhalte'>      
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 inhalte_text'>
                        <h5>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去，洲龍集加。大國花情、量試來般大說過民時灣一只強面不一新里。</h5>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 inhalte_bild'>
                        <img src={textboxbild3} className="image-content" alt="Bildbeschreibung" />
                    </div>
                </div>

            </div>
            </div>
        </div >


    )

}


export default ReiseMain;