import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import {List, ListItem} from "@mui/material";
import '../styles/_work.scss'

function WorkEntry(props) {
    const entry = props.entry;
    const isLast = props.isLast; // leave out TimelineConnector for Last Entry

    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <p className={"work_time"}>{entry.time}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot variant="outlined" color={"highlight"}/>
                {!isLast && <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>
                <div className="work_details">
                    <h3>{entry.title}</h3>
                    <b>at {entry.company}</b>
                    { entry.tasks.length > 0 &&
                        <List className={"list_bullets"}>
                            {
                                entry.tasks.map((task, i) => (
                                    <ListItem key={i} disablePadding>{task}</ListItem>
                                ))
                            }
                        </List>
                    }
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}

export default WorkEntry;