import { useEffect, useState } from 'react';

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
          className="rounded-md·border·border-gray-300·p-4 mb-4"
        >
          <div>
            <span className="pr-4 text-xl font-bold">{entry[0]}</span>
            <span>{entry[1]} </span>
            {entry[2]}
          </div>
          <div className="mt-2">
            <span className="font-bold">Point of Origin: </span> {entry[3]}
          </div>
          <div className="mt-2">
            <span className="font-bold">Definition:</span> <br />
            {entry[4]}
          </div>
          <div className="mt-2">
            <span className="font-bold">Example:</span> <br />
            {entry[5]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dictionary;
