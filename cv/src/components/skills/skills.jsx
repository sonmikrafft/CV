import '../../styles/_skills.scss'
import SectionTitle from "../sectionTitle.jsx";
import SkillCategory from "./skillcategory.jsx";
import skills from '../../assets/skills.json';
import {Box} from "@mui/material";

/*
List of Skills stored in corresponding JSON
 */
function SkillsSection() {

    return (
        <section id="skills" className="skills plr ptb">
            <SectionTitle title="Skills"/>
            <Box className="skills-list">
                {
                    // Technical Skills
                    skills.technical.map((category, i) =>
                        <SkillCategory title={category.title} skills={category.skills} key={i} />
                    )
                }
                {
                    // Management Skills
                    skills.management.map((category, i) =>
                        <SkillCategory title={category.title} skills={category.skills} key={i} />
                    )
                }
            </Box>
        </section>
    )
}

export default SkillsSection;