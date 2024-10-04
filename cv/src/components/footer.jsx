import '../styles/_footer.scss'
import {Box, Link, SvgIcon} from "@mui/material";
import {AlternateEmail, Home, North, PhoneEnabled} from "@mui/icons-material";

function Footer() {

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="footer plr ptb">
            {/*Contact Information*/}
            <Box className={"footer_infos"}>
                {/*Adress*/}
                <Box className={"footer_info"}>
                    <Home/>
                    <Link href={"https://maps.app.goo.gl/EFd3Y1wwY9hoVPGc8"}>Lützelsteiner Straße 27, Munich</Link>
                </Box>
                {/*Phone Number */}
                <Box className={"footer_info"}>
                    <PhoneEnabled/>
                    <Link>+49 1515 9444157</Link>
                </Box>
                {/*Email*/}
                <Box className={"footer_info"}>
                    <AlternateEmail/>
                    <Link>sonmikrafft @gmail.com</Link>
                </Box>
                {/*Github*/}
                <Box className={"footer_info"}>
                    <SvgIcon>
                        <path
                            d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                    </SvgIcon>
                    <Link href={"https://github.com/sonmikrafft"}>Github sonmikrafft</Link>
                </Box>
                {/*FrontendMentor*/}
                <Box className={"footer_info"}>
                    <SvgIcon>
                        <path
                            d="M12.17 1.272a.732.732 0 0 0-.718.732v13.914a.732.732 0 0 0 .732.732.732.732 0 0 0 .732-.732V2.004a.732.732 0 0 0-.745-.732zM23.246 5.44a.734.734 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.813a.738.738 0 0 0 .3.065.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966.734.734 0 0 0-.69-.433zm-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.732.732 0 0 0-.694-.547z"/>
                    </SvgIcon>
                    <Link href={"https://www.frontendmentor.io/profile/sonmikrafft"}>Frontendmentor sonmikrafft</Link>
                </Box>
            </Box>
            <Link href={"#"} className={"footer_back"} onClick={handleSmoothScroll}>Back to top <North/></Link>
        </footer>
    )
}

export default Footer;