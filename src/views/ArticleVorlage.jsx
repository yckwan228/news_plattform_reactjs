import React, { useEffect, useState } from 'react';
import '../style/ArticleVorlage.css'; // Importieren Sie einen CSS-Style
import Button from '@mui/material/Button';
import ArtikelBild from '../materials/TexteBilder/macron_scholz_inKyiv.jpeg';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PrintIcon from '@mui/icons-material/Print';
import AddLinkIcon from '@mui/icons-material/AddLink';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KommentarContainer from './KommentarContainer';
import Kommentar from './Kommentar';
import DeleteCommentSnackbar from './DeleteCommentSnackbar';
import ReadMore from '/Users/terrykwan/Documents/neues-react-projekt/src/views/ReadMore.jsx';
import SocialMediaBox from './SocialMediaBox';


function ArticleVorlage() {

    // Verwaltung von DeleteCommentSnackBar

    const [deleteSnackbarOpen, setDeleteSnackbarOpen] = useState(false);

    const showDeleteCommentSnackbar = () => {
        setDeleteSnackbarOpen(true);
    };

    const closeDeleteCommentSnackbar = () => {
        setDeleteSnackbarOpen(false);
    };

    // 
    const [articleTitle, setArticleTitle] = useState("德國政壇的no go —— 德國的孤身走我路 (Deutscher Alleingang)");

    const [comments, setComments] = useState([]);

    useEffect(() => {
        document.title = articleTitle;
    }, [articleTitle]);

    return (
        <div className="container article">

            {/* die Buttons */}

            <div className='top-buttons'>
                <Button variant="text" className="button1">德國政治</Button>
                <Button variant="text" className="button2">歐洲政治</Button>
                <Button variant="text" className="button3">香港及中國</Button>
            </div>


            {/* der Körper */}

            <div className='article_body'>

                <div className='article_titel'>
                    <h2 className="title"> {articleTitle} </h2>
                </div>

                <div className='article_bild'>

                    <img src={ArtikelBild} className="article_bild" alt="article_bild" />

                </div>


                <div className='article_text'>

                    <div className='introbox' style={{ fontWeight: 500 }}>

                        <div className='introbox_text'>

                            <p>唔太認識德國政治嘅人會認爲德國嘅動作反應緩慢，太多猶疑同太浪費時間去溝通同合作。
                                當然呢部分嘅批評係正確，亦都係無可否認嘅事實。但係，點解德國，一個被認爲高效率嘅歐洲龍頭，會有呢個政治文化呢？</p>


                            <div className="Datum">
                                <a href="/">德國</a>
                                <span className="px-1">/</span>
                                <span>January 01, 2045</span>
                            </div>

                        </div>

                    </div>
                    

                    <div className='maintext_box'>

                        <div className='maintext_box_text' style={{ fontWeight: 500 }}>

                            <p>德國喺烏克蘭開戰嘅4嘅月來，不斷被烏克蘭政府批評動作反應緩慢，成日都扭扭擰擰，同俄羅斯關係曖昧。正當東歐、北歐同英國的總統總理首相都於戰爭初期為表示團結同支持出訪基輔，與澤連斯基會面；德國總理Olaf Scholz 同總統Frank Walter-Steinmeier 一直遲遲唔出訪烏克蘭，而總統Frank Walter-Steinmeier更加喺五月嘅時候比烏克蘭拒絕出訪基輔；及後Olaf Scholz 更加比烏克蘭駐柏林大使Andrij Melnyk形容為beleidigte Wurst （中文翻譯為：一條被侮辱的腸仔，意思係我地廣東話大概嘅小氣鬼），導致烏德關係當時較爲差。德國多番强調德國無論軍事上、外交上定係經濟上作爲烏克蘭最大嘅支持者，烏克蘭需要感恩同態度好啲。德國同時强調，外交策略上德國是需要同其他歐洲國家溝通同合作，絕對唔能夠孤身走我路。</p>

                            <p>二戰後到宜家，德國政治一直好避忌一個做法，就係德國嘅孤身走我路 (Deutscher Alleingang)。一次大戰，尤其之後近乎毀滅歐洲甚至世界嘅納粹主義，兩者都係德國孤身走我路嘅後果。現今德國政治非常清楚同緊記呢個歷史教訓，多年來無論咩事情上，德國嘅政治領導都非常强調拒絕孤身走我路，尤其如果牽涉到東歐國家事務（納粹當年嘅孤身走我路完全摧毀整個斯拉夫東歐），一直避免喺外交上孤身走我路。唔孤身走我路嘅結果就係更花費時間去同其他國家協調同溝通，做成猶疑不決嘅畫面。</p>

                            <p>上個禮拜，德國嘅總理Olaf Scholz同羅馬尼亞法國意大利總統一齊出訪基輔。呢一次四人行正正係為避免德國的孤身走我路嘅外交形象，想表達德國作爲合作者嘅一個畫面同信息。</p>

                        </div>

                    </div>

                    <SocialMediaBox />


                    {/*  Kommentar-Container und Kommentar */}

                    {/*  putComment_box & seeComment_box innerhabl der Accordion */}

                    <div className='klappmenu_area'>

                        <Accordion className='klappmenu'>

                            <AccordionSummary

                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className="klappmenu_head"
                            >
                                <h5>留言區</h5>

                            </AccordionSummary>

                            <AccordionDetails className='klappmenu_inhalte'>



                                <div className='putComment-Box'>

                                    < KommentarContainer comments={comments} setComments={setComments}
                                        deleteSnackbarOpen={deleteSnackbarOpen}
                                        closeDeleteCommentSnackbar={closeDeleteCommentSnackbar} />

                                </div>


                                {/* Einzelner Kommentar Beginn */}

                                <div className='seeComment_box'>

                                    {comments.map((comment, i) => (   // durchlaufen durch die Liste und zurückgeben den Kommentar an Position i

                                        <Kommentar key={i} comment={comment} comments={comments} setComments={setComments} index={i}
                                            showDeleteCommentSnackbar={showDeleteCommentSnackbar} /> // übergeben das Prop an Kommentar.jsx

                                    ))}

                                   
                                </div>

                                {/* Einzelner Kommentar Ende */}

                            </AccordionDetails>

                        </Accordion>


                        <ReadMore />

                    </div>

                </div>


            </div>

            <DeleteCommentSnackbar open={deleteSnackbarOpen} actionClose={closeDeleteCommentSnackbar} />


        </div >
    );
}


export default ArticleVorlage;