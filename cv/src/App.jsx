import theme from './theme';
import Navigation from "./components/navigation.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Introduction from "./components/introduction.jsx";
import ProjectSection from "./components/projects.jsx";
import WorkSection from "./components/work.jsx";
import EducationSection from "./components/education.jsx";
import Footer from "./components/footer.jsx";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navigation/>
            <Introduction/>
            <main>
                <ProjectSection/>
                <WorkSection/>
                <EducationSection/>
            </main>
            <Footer color="secondary" />
        </ThemeProvider>
    )
}

export default App
