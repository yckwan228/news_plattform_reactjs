import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PrintIcon from '@mui/icons-material/Print';
import AddLinkIcon from '@mui/icons-material/AddLink';
import '../style/SocialMediaBox.css'; // Importieren Sie einen CSS-Style

function socialmediaBox() {

    return (

        <div className='socialmediaBox'>   {/* Social Media Buttons */}

            <div className='socialmediabuttons'>
                <IconButton color="primary" aria-label="Facebook" className="FB_button" onClick={() => { /* Handle your logic here */ }}>
                    <FacebookIcon />
                </IconButton>

                <IconButton color="primary" aria-label="WhatsApp" className="WTSAPP_button" onClick={() => { /* Handle your logic here */ }}>
                    <WhatsAppIcon />
                </IconButton>

                <IconButton color="primary" aria-label="Twitter" className="TW_button" onClick={() => { /* Handle your logic here */ }}>
                    <TwitterIcon />
                </IconButton>

                <IconButton color="primary" aria-label="Print" className="PRINT_button" onClick={() => { /* Handle your logic here */ }}>
                    <PrintIcon />
                </IconButton>

                <IconButton color="primary" aria-label="Print" className="LINK_button" onClick={() => { /* Handle your logic here */ }}>
                    <AddLinkIcon />
                </IconButton>
            </div>

        </div>


    );


}

export default socialmediaBox;