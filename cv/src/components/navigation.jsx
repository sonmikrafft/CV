import '../styles/_navigation.scss'
import {AppBar, Link} from "@mui/material";

function Navigation() {
    const handleSmoothScroll = (e, targetID) => {
        e.preventDefault();
        const target = document.getElementById(targetID);
        if (target) {
            target.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <AppBar position={"absolute"}>
            <div className="links plr">
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
        </AppBar>
    )
}

export default Navigation;