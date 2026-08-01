import {Box, Chip} from "@mui/material";

function SkillChip(props) {

    /*
    Return the Path of a given Icon
    */
    const getIconPath = (icon) => {
        return "/icons/" + icon.replace(" ", "").toLowerCase() + ".svg";
    }

    return (
        <Chip
            key={props.key}
            variant={"outlined"}
            size={"small"}
            label={props.skill}
            icon={
                <Box
                    component="img"
                    src={getIconPath(props.skill)}
                    alt={`${props.skill} Icon`}
                    sx={{
                        width: 18,
                        height: 18,
                    }}
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
            }
        />
    );
}

export default SkillChip;