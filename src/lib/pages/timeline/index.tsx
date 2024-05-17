/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable sonarjs/no-duplicate-string */
import { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';

import { useTheme } from '@/lib/components/theme-provider';
import 'react-vertical-timeline-component/style.min.css';

interface Event {
  title: string;
  cardTitle: string;
}

interface EventsByYear {
  [year: string]: Event[];
}

const Timeline = () => {
  const { theme } = useTheme();
  const [eventsByYear, setEventsByYear] = useState<EventsByYear>({});
  const [chronoTheme, setChronoTheme] = useState({
    primary: 'black',
    secondary: theme === 'dark' ? 'rgb(23, 37, 84)' : 'rgb(253, 230, 138)',
    cardBgColor: theme === 'dark' ? 'rgb(17, 24, 39)' : 'rgb(255, 255, 255)',
    cardTitleColor: theme === 'dark' ? 'white' : 'black',
    titleColor: theme === 'dark' ? 'white' : 'black',
    titleColorActive: theme === 'dark' ? 'white' : 'black',
  });

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
        const [title, cardTitle] = trimmedLine.split(' - ');
        events[currentYear].push({ title, cardTitle });
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

  useEffect(() => {
    console.log('theme changed', theme);

    setChronoTheme((prevTheme) => ({
      ...prevTheme,
      secondary: theme === 'dark' ? 'rgb(23, 37, 84)' : 'rgb(253, 230, 138)',
      cardBgColor: theme === 'dark' ? 'rgb(17, 24, 39)' : 'rgb(255, 255, 255)',
      cardTitleColor: theme === 'dark' ? 'white' : 'black',
      titleColor: theme === 'dark' ? 'white' : 'black',
      titleColorActive: theme === 'dark' ? 'white' : 'black',
    }));
  }, [theme]);

  console.log('Chrono theme:', chronoTheme);

  return (
    <div className="wrapper">
      <h1 className="my-10 text-center text-4xl font-bold">The Timeline</h1>
      {Object.entries(eventsByYear).map(([year, events]) => (
        <div key={year}>
          <h1 className="my-10 text-center text-3xl font-bold">{year}</h1>
          <Chrono
            items={events}
            mode="VERTICAL"
            cardHeight="50"
            disableToolbar="True"
            theme={
              theme === 'dark'
                ? {
                    primary: 'black',
                    secondary: 'rgb(23, 37, 84)',
                    cardBgColor: 'rgb(17, 24, 39)',
                    cardTitleColor: 'white',
                    titleColor: 'white',
                    titleColorActive: 'white',
                  }
                : {
                    primary: 'black',
                    secondary: 'rgb(253, 230, 138)',
                    cardBgColor: 'rgb(255, 255, 255)',
                    cardTitleColor: 'black',
                    titleColor: 'black',
                    titleColorActive: 'black',
                  }
            }
          />
        </div>
      ))}
    </div>
  );
};
export default Timeline;
