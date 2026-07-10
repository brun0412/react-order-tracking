import { TimelineIcon } from './TimelineIcon.jsx';

export const TimelineNode = ({ data, children }) => {
  const { icon } = data;

  return (
    <article className="timeline-node">
      <TimelineIcon icon={icon} />
      {children}
    </article>
  )
}