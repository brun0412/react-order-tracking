import { TimelineNode } from "./TimelineNode";

export const Timeline = ({ timelineData }) => {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {timelineData.map((item) => (
          <TimelineNode key={item.id} data={item}>
            <div className="timeline-content">
              <h2 className="timeline-title">{item.title}</h2>
              <p className="timeline-description">{item.description}</p>
            </div>
          </TimelineNode>
        ))}
      </div>
    </section>
  )
}