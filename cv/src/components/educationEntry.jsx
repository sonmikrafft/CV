import '../styles/_education.scss'

function EducationEntry(props) {
    const entry = props.entry

    return (
        <div className="education_entry">
            <div className="education_text">
                <h3 className={"education_title"}>{entry.title}</h3>
                <b>{entry.company}</b>
                <p>{entry.time}</p>
                <div className="education_details">
                    <p>{entry.details}</p>
                    <p><b>Thesis:</b> &quot;{entry.thesis}&quot;</p>
                </div>
            </div>
            <div className="education_result">
                <p className="education_grade">{entry.grade}</p>
                <p className="education_honors">{entry.honors}</p>
            </div>
        </div>
    )
}

export default EducationEntry;