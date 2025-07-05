import React, { useEffect, useState } from 'react';
import '../style/ReiseHauptVorlage.css'; // Importieren Sie einen CSS-Style
import uferImage from '../materials/Home/Am Ufer-min.jpg';
import AusschwitzImage from '../materials/Home/Auschwitz-min.jpg';
import Card1Image from '../materials/Home/Birkenau-min.jpg';
import SocialMediaBox from './SocialMediaBox';
import ReadMore from './ReadMore';

function ReiseHauptVorlage() {



    return (

        <div className="reiseHaupt">

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

            <div className="contentbox ">
                <div className="col-12 col-md-12 col-sm-12 col-lg-6 d-flex align-items-center">
                    <div className="scroll-box">
                        <div className="col-12 col-md-6 col-sm-6 col-lg-12 ">
                            <div className="item">
                                <div className="card">
                                    <img src={AusschwitzImage} alt="" className="card-img-topR" />
                                    <div className="card-body">
                                        <h5 className="card-title">奧茲威辛</h5>
                                        <p className="card-text">二戰德軍在波蘭的惡行</p>
                                        <a href="#" className="btn">了解奧茲威辛</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-sm-6 col-lg-12 ">
                            <div className="item">
                                <div className="card">
                                    <img src={uferImage} alt="" className="card-img-topR" />
                                    <div className="card-body">
                                        <h5 className="card-title">克爾科夫</h5>
                                        <p className="card-text">在湖邊走走</p>
                                        <a href="#" className="btn">了解克爾科夫</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-sm-6 col-lg-12 ">
                            <div className="item">
                                <div className="card">
                                    <img src={Card1Image} alt="" className="card-img-topR" />
                                    <div className="card-body">
                                        <h5 className="card-title">奧茲威辛</h5>
                                        <p className="card-text">死亡火車終點站</p>
                                        <a href="#" className="btn">了解奧茲威辛</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-sm-12 col-lg-6 d-flex align-items-center">

                    <div className="txtbox ">
                        <div className="introTitel ">
                            波蘭
                        </div>
                        <p className='txt'>
                            這就一地且沒為子；變外們世活邊事陸！過熱的維頭魚不成中能麼幾生備會當，個方我體目背功國公議上，以心的原這，兒友天了實名回的上、辦放聲天子一演算行……快隨風水家麼才每作，人感地而面了常臺。外講是向場結影；地也致學木華年來計中自兒可友？有到環！小海問資精子房然中節事。手家了收動成畫、收可收科並有有一，物模里護就容多！東合什雨了就，而們能且水新物停門經因直少！有事下同條時生易長火他正公。簡報。

                            主母上子層物；苦很流道聲等它黨場東要。人看歷必同界，認我球我；今明食說然家同麼地城究。著又每多響為遠流臉於有心存賽候東漸示綠葉城去文西的色灣南益做當而舉蘭告出主自康不感眼立外，然和預代？那道亮古持。際報生隨區散中不阿美而表畫本價。雖道不。接省的總先最切麗著。回向館正存主只成，情可情一報你理這角言之受市報，系心裝上強看灣外文保心直物，經在中：中具國場工灣發別麼滿小理了性，國保使不……車滿得點的電是大世統條復千類形國有果所。下好日想人時容外須的特要名得家到的學之點大。
                        </p>
                        <div className='socialmediaBox'>
                            <SocialMediaBox />
                        </div>

                    </div>
                </div>

                <div className='readMoreBox'>
                    <ReadMore />

                </div>


            </div>


        </div>



    );

}

export default ReiseHauptVorlage;