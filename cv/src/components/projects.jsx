import '../styles/_projects.scss'
import projects from '../assets/projects.json';
import SectionTitle from "./sectionTitle.jsx";
import Project from "./project.jsx";

function ProjectSection() {

    return (
        <section id="projects" className="projects plr ptb">
            <SectionTitle title="Projects"/>
            {
                projects.map((project, i) => (
                    <Project key={i} project={project}/>
                ))
            }
        </section>
    )
}

export default ProjectSection;