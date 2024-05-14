import { useEffect, useState } from 'react';

import { Badge } from '@/lib/components/ui/badge';

const Dictionary = () => {
  const [entries, setEntries] = useState<string[][]>([]);

  useEffect(() => {
    // Function to read the text file
    const readTextFile = async () => {
      try {
        const response = await fetch('/dictionary.txt');
        const text = await response.text();
        const lines = text
          .split('\n')
          .map((line) => line.split('|').map((entry) => entry.trim()));
        setEntries(lines);
      } catch (error) {
        console.error('Error reading the file:', error);
      }
    };

    readTextFile();
  }, []);

  return (
    <div>
      {entries.map((entry) => (
        <div
          key={entry[0]}
          className="mb-4 rounded-lg border border-gray-300 bg-white p-4 pb-4 text-black shadow-sm dark:bg-slate-300"
        >
          <div>
            <span className="pr-4 text-xl font-bold">{entry[0]}</span>
            <span className="pr-4 text-sm italic">{entry[1]} </span>
            <Badge
              className="text-sm text-black dark:border-gray-400"
              variant="outline"
            >
              {entry[2]}
            </Badge>
          </div>
          <div className="mt-2 pl-2">
            <span className="font-bold">Point of Origin: </span> {entry[3]}
          </div>
          <div className="mt-2 pl-2">
            <span className="font-bold">Definition:</span> <br />
            <div className="pl-2">{entry[4]}</div>
          </div>
          <div className="mt-2 pl-2">
            <span className="font-bold">Example:</span> <br />
            <div className="pl-2">{entry[5]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dictionary;
