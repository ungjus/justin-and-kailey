// import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Event {
  date: string;
  description: string;
}

interface EventsByYear {
  [year: string]: Event[];
}

const Timeline = () => {
  const [eventsByYear, setEventsByYear] = useState<EventsByYear>({});

  const parseEvents = (text: string) => {
    const lines: string[] = text.split('\n');
    const events: EventsByYear = {};
    let currentYear: string | null = null;

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.match(/^\d{4}$/)) {
        currentYear = trimmedLine;
        events[currentYear] = [];
      } else if (currentYear) {
        const [date, description] = trimmedLine.split(' - ');
        events[currentYear].push({ date, description });
      }
    });

    return events;
  };

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/timeline.txt'); // Replace with your file path
        const text = await response.text();
        const events = parseEvents(text);
        setEventsByYear(events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="wrapper">
      {Object.entries(eventsByYear).map(([year, events]) => (
        <div key={year}>
          <h1 className="my-10 text-center text-3xl font-bold">{year}</h1>
          <VerticalTimeline layout="2-columns">
            {events.map((event) => (
              <VerticalTimelineElement
                key={event.date}
                contentStyle={{ background: 'rgb(255, 255, 255)' }}
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(255, 255, 255)',
                }}
                date={event.date}
                dateClassName="date"
                iconStyle={{
                  background: 'rgb(0, 0, 0)',
                  color: '#fff',
                }}
                // icon={<Play />}
                position="right"
              >
                <h1>{event.description}</h1>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      ))}
    </div>
  );
};
export default Timeline;
