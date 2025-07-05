import React, { useEffect } from 'react';
import '../style/ArticlesDir.css'; // Importieren Sie einen CSS-Style

import deutschePolitk__dir from '../materials/TexteBilder/DeutschePolitik__Dir.jpeg';
import EU_RUS_Politik_dir from '../materials/TexteBilder/EU_Russland__Dir.jpeg';
import HK_CN__dir from '../materials/TexteBilder/protest-hongkong.jpg';


function ArticleDirectory() {

    useEffect(() => {
        document.title = '所有文章';
    }, []);

    return (
        <div className="container articles">

            <div className="headline">
                <h1>所有文章</h1>
                <hr className="featurette-divider" />
            </div>

            <div className="row featurette">
                <div className="col-md-7 col-lg-7 side-text">
                    <h2 className="featurette-heading fw-normal small-heading">德國政治</h2>    
                    <p>德國作為歐洲嘅經濟巨頭同中心，無論係過去定現在都左右歐洲以至係世界嘅命運。廢青用德國嘅角度去解釋現今世界所發生嘅事。</p>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <a href="./Unterseite_Afrika.html" className="btn" role="btn">去睇文章</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={deutschePolitk__dir} alt="Deutsche Politik" width="500" height="300" />             
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2 col-lg-7 side-text">
                    <h2 className="featurette-heading fw-normal small-heading">歐洲政治</h2>
                    <p>烏克蘭、俄羅斯、高加索同巴爾幹政治，一向都被主流媒體忽視。廢青嘗試將佢哋帶回華文世界。</p>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <a href="./Unterseite_Asien.html" className="btn" role="btn">去睇文章</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 order-md-1">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={EU_RUS_Politik_dir} alt="Deutsche Politik" width="500"  />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 col-lg-7 side-text">
                    <h2 className="featurette-heading fw-norma small-heading">香港及中國</h2>
                    <p>香港同中國，一個永遠講唔完嘅故事。一個被打壓嘅民族尋求一條出路。</p>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <a href="./Unterseite_Europa.html" className="btn" role="btn">去睇文章</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={HK_CN__dir} alt="Deutsche Politik" width="500" height="300" />
                </div>
            </div>

        </div>

    );
}


export default ArticleDirectory;