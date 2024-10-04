import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Link,
    List,
    ListItem,
} from "@mui/material";
import {useState} from "react";

function Project(props) {
    const [showMore, setShowMore] = useState(false);
    const project = props.project;
    const imagePath = "/images/" + project.image + ".jpg";

    const getIconPath = (icon) => {
        const path = "/icons/" + icon.replace(" ", "").toLowerCase() + ".svg"

        return path;
    }

    const handleShowMore = () => {
        setShowMore((prevState) => !prevState);
    }

    return (
        <Card>
            <Box className={`project ${showMore ? 'show-more' : ''}`}>
                <CardMedia
                    component="img"
                    image={imagePath}
                    alt={project.title + " Image"}/>
                <CardContent className={"project_content"}>
                    <Box>
                        <p className="project_time">{project.time}</p>
                        <Link href={project.link}><h3>{project.title}</h3></Link>
                        <p className="project_description">{project.description}</p>
                        {/* List of Frameworks */}
                        <Box className={"project_frameworks"}>
                            {
                                project.frameworks.map((framework, i) => (
                                    <Box key={i} className={"project_framework"}>
                                        <img src={getIconPath(framework)}
                                             alt={framework + " Icon"}
                                             onError={(e) => e.target.src = '/icons/default.svg'}/>
                                        <span>{framework}</span>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    <Button onClick={handleShowMore}
                            variant="contained">{!showMore ? "Show More" : "Show Less"}</Button>
                </CardContent>
                <CardContent className={"project_more"}>
                    {/* List of Tasks */}
                    <p><b>Challenges: </b></p>
                    <List className={"project_tasks list_bullets"}>
                        {
                            project.tasks.map((task, i) => (
                                <ListItem key={i} disablePadding>{task}</ListItem>
                            ))
                        }
                    </List>
                </CardContent>
            </Box>
        </Card>
    )
}

export default Project;
