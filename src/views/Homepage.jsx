import '../style/Homepage.css'; // Importieren Sie einen CSS-Style, wenn Sie einen haben.

import uferImage from '../materials/Home/Am Ufer-min.jpg';
import AusschwitzImage from '../materials/Home/Auschwitz-min.jpg';
import HongKongImage from '../materials/Home/IMG_0080.jpg';

import Card1Image from '../materials/Home/Birkenau-min.jpg';
import Card2Image from '../materials/Home/Maidan.jpg';
import Card3Image from '../materials/Home/Berg.jpg';

import NewsImageBigLeft from '../materials/TexteBilder/macron_scholz_inKyiv.jpg';
import NewsImageSmallLeft from '../materials/TexteBilder/serbienFussball.png';
import NewsImageSmall2Left from '../materials/TexteBilder/TurkGastarbeiter.png';



import NewsImageBigRight from '../materials/TexteBilder/Moldau.jpg';
import NewsImageSmallRight from '../materials/TexteBilder/Tito.png';
import NewsImageSmall2Right from '../materials/TexteBilder/CancelGoethe.png';


import Side1Image from '../materials/ReiseBilder/moskau.png';
import Side2Image from '../materials/ReiseBilder/sonnenaufgangHamburg.png';
import Side3Image from '../materials/ReiseBilder/Paris.png';
import Side4Image from '../materials/Home/Auschwitz-min.jpg';
import Side5Image from '../materials/Home/Maidan.jpg';

import React, { useEffect } from 'react';


const NewsItem = ({ href, title, date, description }) => (
    <div className="w-100 d-flex flex-column justify-content-center px-3" style={{ height: 100 }}>
        <div className="mb-1" style={{ fontSize: 13 }}>
            <a href={href}>{title}</a>
            <span className="px-1">/</span>
            <span>{date}</span>
        </div>
        <a className="h6 m-0" href={href}>{description}</a>
    </div>
);



function HomePage() {


    useEffect(() => {
        document.title = '主頁';
    }, []);

    return (
        <div className="home">

            <section className="home-body">

                {/* Beginn Carousel */}

                <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={uferImage} className="d-block w-100" alt="Burg Wawel Am Ufer" />
                            <div id="carousel-caption1">
                                <div className="carousel-caption d-none d-md-block" id="TextCarousel">
                                    <h5>克爾科夫嘅中午</h5>
                                    <p>湖邊走走</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={AusschwitzImage} className="d-block w-100" alt="Burg Wawel Am Ufer" />
                            <div className="carousel-caption d-none d-md-block" id="TextCarousel">
                                <h5>奧茲威辛集中營</h5>
                                <p>人類歷史嘅污點</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={HongKongImage} className="d-block w-100" alt="Burg Wawel Am Ufer" />
                            <div className="carousel-caption d-none d-md-block" id="TextCarousel">
                                <h5>香港</h5>
                                <p>香港，一個叫「家」嘅地方</p>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* Ende Carousel */}

                {/* Beginn Inhalte */}
                <section className="home-content">



                    <div className="row g-4 ">

                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="card">
                                <img src={Card1Image} alt="Birkenau" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">波蘭</h5>
                                    <p className="card-text">一個悲慘嘅國度</p>
                                    <a href="/ReiseLand" className="btn">了解波蘭</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="card">
                                <img src={Card2Image} alt="Kyiv" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">烏克蘭</h5>
                                    <p className="card-text">英雄國</p>
                                    <a href="./Unterseite_Europa _Ukraine.html" className="btn">了解烏克蘭</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="card">
                                <img src={Card3Image} alt="Chefchaouen" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">摩洛哥</h5>
                                    <p className="card-text">歐洲嘅後花園</p>
                                    <a href="./Unterseite_Afrika_Marokko.html" className="btn">了解摩洛哥</a>
                                </div>
                            </div>
                        </div>

                    </div>




                    <div className="body-box">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                                    <h3 className="m-0">政治及文化文章</h3>
                                    <a className="text-secondary font-weight-medium text-decoration-none" href="/">查看更多</a>
                                </div>

                                <div className="col-lg-4 col-12">
                                    <div className="position-relative mb-3 news-container">
                                        <img className="card-img-top w-100" src={NewsImageBigLeft} style={{ objectFit: "cover" }} alt="news-image" />
                                        <div className="overlay position-relative">
                                            <div className="mb-2" style={{ fontSize: "14px" }}>
                                                <a href="/">德國</a>
                                                <span className="px-1">/</span>
                                                <span>January 01, 2045</span>
                                            </div>
                                            <a className="h4" href="/articleVorlage" >德國的孤身走我路</a>

                                            <p className="m-0">唔太認識德國政治嘅人會認爲德國嘅動作反應緩慢，太多猶疑同太浪費時間去溝通同合作。但係我地應該如何解讀德國嘅政治操作？</p>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-3 small-news-container">
                                        <img
                                            src={NewsImageSmallLeft}
                                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                            alt="News Thumbnail"  // alt-Attribut hinzugefügt für Barrierefreiheit
                                        />
                                        <div className="w-100 d-flex flex-column justify-content-center px-3" style={{ height: "100px" }}>
                                            <div className="mb-0">
                                                <a href="/">巴爾幹</a>
                                                <span className="px-1">/</span>
                                                <span>January 01, 2045</span>
                                            </div>
                                            <a className="h6 m-0" href="/">波班的世紀一踢——東歐政治、民族與足球</a>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-3 small-news-container">
                                        <img
                                            src={NewsImageSmall2Left}
                                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                            alt="News Thumbnail"  // alt-Attribut hinzugefügt für Barrierefreiheit
                                        />
                                        <div className="w-100 d-flex flex-column justify-content-center px-3" style={{ height: "100px" }}>
                                            <div className="mb-0">
                                                <a href="/">德國</a>
                                                <span className="px-1">/</span>
                                                <span>January 01, 2045</span>
                                            </div>
                                            <a className="h6 m-0" href="/">土耳其與德國勞工協議六十週年</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-12">

                                    <div className="position-relative mb-3 news-container">
                                        <img className="card-img-top w-100" src={NewsImageBigRight} style={{ objectFit: "cover" }} alt="News Image" />
                                        <div className="overlay position-relative">
                                            <div className="mb-2" style={{ fontSize: "14px" }}>
                                                <a href="/">烏克蘭</a>
                                                <span className="px-1">/</span>
                                                <span>January 01, 2045</span>
                                            </div>
                                            <a className="h4" href="/">烏克蘭淪陷，誰是下一個？</a>
                                            <p className="m-0">華文媒體三個禮拜來不斷報導戰事新聞，比較多寫戰事本身，毫無分析將會發生嘅事情：烏克蘭淪陷之後，誰是下一個？</p>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-3 small-news-container">
                                        <img src={NewsImageSmallRight} style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="News Thumbnail 1" />
                                        <div className="w-100 d-flex flex-column justify-content-center px-3" style={{ height: "100px" }}>
                                            <div className="mb-0">
                                                <a href="/">巴爾幹</a>
                                                <span className="px-1">/</span>
                                                <span>January 01, 2045</span>
                                            </div>
                                            <a className="h6 m-0" href="/">從機器技工到近代南斯拉夫的創造者——鐵托、塞族、克族與巴爾幹</a>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-3 small-news-container">
                                        <img src={NewsImageSmall2Right} style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="News Thumbnail 2" />
                                        <div className="w-100 d-flex flex-column justify-content-center px-3" style={{ height: "100px" }}>
                                            <div className="mb-0" >
                                                <a href="/">德國</a>
                                                <span className="px-1">/</span>
                                                <span>January 01, 2045</span>
                                            </div>
                                            <a className="h6 m-0" href="/">Cancel Culture——文豪歌德與美化強奸女性</a>
                                        </div>
                                    </div>

                                </div>


                                <div className="col-lg-4 pt-3 pt-lg-0">

                                    <div className="pb-3">
                                        <div className="bg-light py-2 px-4 mb-3">
                                            <h3 className="m-0">旅遊人生</h3>
                                        </div>

                                        <div className="d-flex mb-3 side-news-container">
                                            <img src={Side1Image} alt="news" style={{ width: 100, height: 100, objectFit: 'cover' }} className="img-fluid" />

                                            <NewsItem href="#" title="俄羅斯" date="January 01, 2045" description="沙皇的夢" />

                                        </div>

                                        <div className="d-flex mb-3 side-news-container">
                                            <img src={Side2Image} alt="news" style={{ width: 100, height: 100, objectFit: 'cover' }} className="img-fluid" />
                                            <NewsItem href="#" title="德國" date="January 01, 2045" description="漢堡的日出" />
                                        </div>

                                        <div className="d-flex mb-3 side-news-container">
                                            <img src={Side3Image} alt="news" style={{ width: 100, height: 100, objectFit: 'cover' }} className="img-fluid" />
                                            <NewsItem href="#" title="法國" date="January 01, 2045" description="巴黎美食之旅" />
                                        </div>

                                        <div className="d-flex mb-3 side-news-container">
                                            <img src={Side4Image} alt="news" style={{ width: 100, height: 100, objectFit: 'cover' }} className="img-fluid" />
                                            <NewsItem href="#" title="波蘭" date="January 01, 2045" description="奧茲威辛的過去" />
                                        </div>

                                        <div className="d-flex mb-3 side-news-container">
                                            <img src={Side5Image} alt="news" style={{ width: 100, height: 100, objectFit: 'cover' }} className="img-fluid" />
                                            <NewsItem href="#" title="烏克蘭" date="January 01, 2045" description="榮譽歸於英雄" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </section>
        </div>
    );
}


export default HomePage;