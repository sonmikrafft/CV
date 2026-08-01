import {Box} from "@mui/material";

function Skill(props) {

    /*
    Return the Path of a given Icon
    */
    const getIconPath = (icon) => {
        return "/icons/" + icon.replace(" ", "").toLowerCase() + ".svg";
    }

    return (
        <Box key={props.key} className={"project_framework"}>
            <img src={getIconPath(props.skill)}
                 alt={props.skill + " Icon"}
                 onError={(e) => e.target.src = '/icons/default.svg'}/>
            <span>{props.skill}</span>
        </Box>);
}

export default Skill;