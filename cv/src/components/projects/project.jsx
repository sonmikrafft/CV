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
import Skill from "../skill.jsx";

function Project(props) {
    const [showMore, setShowMore] = useState(false);
    const project = props.project;
    const imagePath = "/images/" + project.image + ".jpg";

    /*
    Handle Click on Show More by toggling its state
     */
    const handleShowMore = () => {
        setShowMore((prevState) => !prevState);
    }

    return (
        <Card>
            <Box className={`project ${showMore ? 'show-more' : ''}`}>
                {/* 1st Part: Image */}
                <CardMedia
                    component="img"
                    image={imagePath}
                    alt={project.title + " Image"}/>
                {/* 2nd Part: Time, Title, Description, Frameworks, and Show More Button */}
                <CardContent className={"project_content"}>
                    <Box>
                        <p className="project_time">{project.time}</p>
                        <Link href={project.link}><h3>{project.title}</h3></Link>
                        <p className="project_description">{project.description}</p>
                        {/* List of Frameworks */}
                        <Box className={"project_frameworks"}>
                            {
                                project.frameworks.map((framework, i) => (
                                    <Skill key={i} skill={framework}/>
                                ))
                            }
                        </Box>
                    </Box>
                    <Button onClick={handleShowMore}
                            variant="contained">{!showMore ? "Show More" : "Show Less"}</Button>
                </CardContent>
                {/* 3rd Part: Tasks */}
                <CardContent className={`project_more ${showMore ? '' : 'hide'}`}>
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
