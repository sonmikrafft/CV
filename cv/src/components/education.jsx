import '../styles/_education.scss'
import SectionTitle from "./sectionTitle.jsx";
import education from '../assets/education.json';
import EducationEntry from "./educationEntry.jsx";

/*
List of Education Steps stored in corresponding JSON
 */
function EducationSection() {

    return (
        <section id="education" className="education plr ptb">
            <SectionTitle title="Education"/>
            {
                education.map((entry, i) => (
                    <EducationEntry key={i} entry={entry}/>
                ))
            }
        </section>
    )
}

export default EducationSection;