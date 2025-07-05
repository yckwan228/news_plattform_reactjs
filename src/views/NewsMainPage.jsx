import React, { useEffect, useState } from 'react';
import '../style/NewsMainPage.css'; // Importieren Sie einen CSS-Style
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';
import BigImageReihe1 from '../materials/Home/news-700x435-1.jpg';
import SmallImage1Reihe1 from '../materials/Home/news-500x280-1.jpg';
import textboxbild1 from '../materials/Home/news-100x100-4.jpg';
import textboxbild2 from '../materials/Home/news-100x100-3.jpg';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function NewsMainPage() {

    const [PageTitle, setPageTitle] = useState("新聞主頁");

    useEffect(() => {
        document.title = PageTitle;
    }, [PageTitle]);


    // Verwaltung von Bildschirmgröße

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


        <div className='NewsPageContainer'>

            {/* top buttons und Such-Eingabefeld*/}

            <div className='top-bar-News'>

                <div className='top-buttons-News'>

                    <Button variant="text" className="button1">東歐新聞</Button>
                    <Button variant="text" className="button2">德國新聞</Button>
                    <Button variant="text" className="button3">香港</Button>
                    <Button variant="text" className="button4">其他新聞</Button>

                </div>

                <div className='searchBar'>
                    <SearchBar />
                </div>

            </div>

            <div className='PageHeading'>

                <h1 className='Heading-text'>新聞主頁</h1>

            </div>

            {/* Start der Inhalte, erste Reihe */}

            <div className="container-fluid paddding mb-5 headingNews">

                <div className="row mx-0">

                    <div className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
                        <div className="fh5co_suceefh5co_height">
                            <img src={BigImageReihe1} alt="img" />
                            <div className="fh5co_suceefh5co_height_position_absolute"></div>
                            <div className="fh5co_suceefh5co_height_position_absolute_font">
                                <div className='news-heading'>
                                    <div className='date_item1'><a href="#" className="color_fff"><AccessTimeIcon />&nbsp;&nbsp;Dec 31,2017</a></div>
                                    <div><a href="single.html" className="fh5co_good_font_1"> After all is said and done, more is said than done </a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row">

                            {/* Hier können Sie eventuell eine Karte verwenden, um den Code nicht zu wiederholen */}
                            {/* Beispiel: */}
                            {[
                                { image: SmallImage1Reihe1, date: 'Oct 28,2017', text: 'After all is said and done, more is said than done' },
                                { image: SmallImage1Reihe1, date: 'Oct 28,2017', text: 'After all is said and done...' },
                                { image: SmallImage1Reihe1, date: 'Oct 28,2017', text: 'After all is said and done, more is said than done' },
                                { image: SmallImage1Reihe1, date: 'Oct 28,2017', text: 'After all is said and done, more is said...' },
                            ].map((item, index) => (
                                <div key={index} className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                    <div className="fh5co_suceefh5co_height_2">
                                        <img src={item.image} alt="img" />
                                        <div className="fh5co_suceefh5co_height_position_absolute"></div>
                                        <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                                            <div className='sub-news-heading'>
                                                <div className='date_item2'><a href="#" className="color_fff"><AccessTimeIcon />&nbsp;&nbsp;{item.date}</a></div>
                                                <div><a href="single.html" className="fh5co_good_font_sub"> {item.text} </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>

            {/* Ende der Inhalte, erste Reihe */}


            {/* Start Nachrichten-Carousel 1 HotNews */}

            <div className='CarouselParts'>

                <div className='HotNewsCarousel'>

                    <div className='Heading-Bar'>

                        <h3 className='Heading'>熱門新聞</h3>

                        <div className="carousel-controls">

                            <button className="carousel-control-prev-hotNews" id='prev-News' type="button" data-bs-target="#carouselExampleIndicators-Hotnews" data-bs-slide="prev">
                                <ArrowLeftIcon id="prevIconNews" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next-hotNews" id='next-News' type="button" data-bs-target="#carouselExampleIndicators-Hotnews" data-bs-slide="next">
                                <ArrowRightIcon id="nextIconNews" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>

                        </div>

                    </div>

                    <hr className="featurette-divider" />

                    <div className='Hotnews'>

                        {windowWidth <= 768 ? (


                            <div id="carouselExampleIndicators-Hotnews" className="carousel slide">

                                <div className="carousel-inner-news">   {/* row, bilder nebeneinander */}

                                    <div className="carousel-item active" id="carouselBild">

                                        <div className='image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className='image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className='image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className=' image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className='image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className=' image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ) : (

                            <div id="carouselExampleIndicators-Hotnews" className="carousel slide">

                                <div className="carousel-inner-news">   {/* row, bilder nebeneinander */}


                                    <div className="carousel-item active" id="carouselBild">

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>
                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Ende Nachrichten-Carousel 1 HotNews */}

                {/* Start Nachrichten-Carousel 2 GermanNews */}

                <div className='GermanNewsCarousel'>

                    <div className='Heading-Bar'>

                        <h3 className='Heading'>德國新聞</h3>

                        <div className="carousel-controls">

                            <button className="carousel-control-prev-GermanNews" id='prev-News' type="button" data-bs-target="#carouselExampleIndicators-GermanNews" data-bs-slide="prev">
                                <ArrowLeftIcon id="prevIconNews" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next-GermanNews" id='next-News' type="button" data-bs-target="#carouselExampleIndicators-GermanNews" data-bs-slide="next">
                                <ArrowRightIcon id="nextIconNews" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>

                        </div>

                    </div>

                    <hr className="featurette-divider" />

                    <div className='GermanNews'>

                        {windowWidth <= 768 ? (


                            <div id="carouselExampleIndicators-GermanNews" className="carousel slide">

                                <div className="carousel-inner-news">   {/* row, bilder nebeneinander */}

                                    <div className="carousel-item active" id="carouselBild">

                                        <div className='image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className='image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className='image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className=' image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>
                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className=' image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>
                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="carousel-item" id="carouselBild">

                                        <div className='image-container-News'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>
                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ) : (

                            <div id="carouselExampleIndicators-GermanNews" className="carousel slide">

                                <div className="carousel-inner-news">   {/* row, bilder nebeneinander */}

                                    <div className="carousel-item active" id="carouselBild">

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='image-container'>
                                            <a href="/">
                                                <img src={textboxbild1} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

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
                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className=' image-container'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>
                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className=' image-container'>
                                            <a href="/">
                                                <img src={textboxbild2} alt="Beschreibung des ersten Bildes" />
                                                <div className='caption'>

                                                    <p>好上聲只驚少速步起變自心的計麼腳。空程念到位老痛衣黃那女交益投無好飛營到自國刻去。</p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Ende Nachrichten-Carousel 2 GermanNews */}

                <div className='NewsTags'>

                    <div className='Heading-Bar'>
                        <h3 className='Heading'>新聞標籤</h3>
                    </div>
                    <hr className="featurette-divider" />


                    <div className="fh5co_tags_all">
                        <a href="#" className="fh5co_tagg">Business</a>
                        <a href="#" className="fh5co_tagg">Technology</a>
                        <a href="#" className="fh5co_tagg">Sport</a>
                        <a href="#" className="fh5co_tagg">Art</a>
                        <a href="#" className="fh5co_tagg">Lifestyle</a>
                        <a href="#" className="fh5co_tagg">Three</a>
                        <a href="#" className="fh5co_tagg">Photography</a>
                        <a href="#" className="fh5co_tagg">Lifestyle</a>
                        <a href="#" className="fh5co_tagg">Art</a>
                        <a href="#" className="fh5co_tagg">Education</a>
                        <a href="#" className="fh5co_tagg">Social</a>
                        <a href="#" className="fh5co_tagg">Three</a>
                    </div>



                </div>

            </div>

        </div >


    );
}


export default NewsMainPage;