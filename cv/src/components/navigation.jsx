import '../styles/_navigation.scss'
import '../styles/_index.scss'
import {AppBar, Backdrop, Box, Drawer, IconButton, Link, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const handleSmoothScroll = (e, targetID) => {
        e.preventDefault();
        const target = document.getElementById(targetID);
        if (target) {
            target.scrollIntoView({behavior: 'smooth'})
        }
    }

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const MobileMenu = (
        <div className={"menu_links"}>
            <Link href={'#projects'} onClick={(e) => {
                handleSmoothScroll(e, "projects");
                handleOpen();
            }}>
                Projects
            </Link>
            <Link href={'#work'} onClick={(e) => {
                handleSmoothScroll(e, "work");
                handleOpen();
            }}>
                Work Experience
            </Link>
            <Link href={'#education'} onClick={(e) => {
                handleSmoothScroll(e, "education");
                handleOpen();
            }}>
                Education
            </Link>
        </div>
    );

    return (
        <AppBar position={"absolute"}>
            {/* Grey Overlay when menu is open */}
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={isOpen}
                onClick={handleOpen}
            ></Backdrop>
            {/* Mobile Menu */}
            <Drawer open={isOpen} onClose={handleOpen}>
                {MobileMenu}
            </Drawer>

            {/* Toolbar for Desktop */}
            <div className="toolbar plr hide-for-mobile">
                <div className="links">
                    <Link href={'#projects'} onClick={(e) => handleSmoothScroll(e, "projects")}>
                        Projects
                    </Link>
                    <Link href={'#work'} onClick={(e) => handleSmoothScroll(e, "work")}>
                        Work Experience
                    </Link>
                    <Link href={'#education'} onClick={(e) => handleSmoothScroll(e, "education")}>
                        Education
                    </Link>
                </div>
            </div>

            {/* Toolbar for Mobile */}
            <div className="toolbar plr hide-for-desktop">
                <div className="menu_button">
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleOpen}
                    >
                        {isOpen ? <CloseIcon/> : <MenuIcon/>}
                    </IconButton>
                </div>
            </div>
        </AppBar>
    )
}

export default Navigation;