import theme from './theme';
import Navigation from "./components/navigation.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Introduction from "./components/introduction.jsx";
import ProjectSection from "./components/projects/projects.jsx";
import WorkSection from "./components/work/work.jsx";
import EducationSection from "./components/education/education.jsx";
import Footer from "./components/footer.jsx";
import SkillsSection from "./components/skills/skills.jsx";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navigation/>
            <Introduction/>
            <main>
                <SkillsSection/>
                <ProjectSection/>
                <WorkSection/>
                <EducationSection/>
            </main>
            <Footer color="secondary" />
        </ThemeProvider>
    )
}

export default App
