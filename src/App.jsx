import './App.css'
import { Timeline } from './components/timeline/Timeline.jsx'
import { timeline } from './data/timeline.js'

/*

- X The Timeline component should have a header (.page-intro) with a title and a description within.
- X The timeline container should have a list of timeline nodes (.timeline-node).
- X Each timeline node should have an icon (.timeline-icon) and a content (.timeline-content) within.
- X The timeline content should have a title (.timeline-title) and a description (.timeline-description) within.

*/

function App() {
  return (
    <main>
      <Timeline timelineData={timeline}>
        <header className="page-intro">
        <h1>Timeline</h1>
        <p>This is the required description in the timeline header</p>
      </header>
      </Timeline>
    </main>
  )
}

export default App
