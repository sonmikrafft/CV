import '../../styles/_skills.scss'
import {Paper, Box} from "@mui/material";
import SkillChip from "./skillchip.jsx";

/*
List of Skills of a category
 */
function SkillCategory(props) {

    return (
        <Paper key={props.key} className={"skills-category"}>
            <h3>{props.title}</h3>
            <Box className={"skills-category-list"}>
                {
                    props.skills.map((skill, i) => <SkillChip key={i} skill={skill}/>)
                }
            </Box>

        </Paper>
    )
}

export default SkillCategory;