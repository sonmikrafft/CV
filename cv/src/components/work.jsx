import Timeline from '@mui/lab/Timeline';
import work from '../assets/work.json';

import '../styles/_work.scss';
import SectionTitle from "./sectionTitle.jsx";
import WorkEntry from "./workEntry.jsx";

function WorkSection() {

    return (
        <section id="work" className="work plr ptb">
            <SectionTitle title="Work"/>
            <Timeline>
                {
                    work.map((entry, i) => (
                        <WorkEntry key={i} entry={entry} isLast={i===work.length-1}/>
                    ))
                }
            </Timeline>
        </section>
    )
}

export default WorkSection;