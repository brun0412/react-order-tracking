import { TimelineIcon } from './TimelineIcon';

export const TimelineNode = ({ data }) => {
  const { icon } = data;

  return (
    <article className="timeline-node">
      <TimelineIcon />
    </article>
  )
}