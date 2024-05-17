import { useEffect, useState } from 'react';

import WordDisplay from './components/Dictionary';
import SearchBar from './components/SearchBar';

const Dictionary = () => {
  const [entries, setEntries] = useState<string[][]>([]);
  const [filteredEntries, setFilteredEntries] = useState<string[][]>([]);

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
        setFilteredEntries(lines);
      } catch (error) {
        console.error('Error reading the file:', error);
      }
    };

    readTextFile();
  }, []);

  // Handle search query
  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredEntries(entries);
    } else {
      const filtered = entries.filter((entry) =>
        entry[0].toLowerCase().startsWith(query.toLowerCase())
      );
      setFilteredEntries(filtered);
    }
  };

  return (
    <div className="wrapper">
      <h1 className="my-10 text-center text-4xl font-bold">
        Shuckster&apos;s Dictionary
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <WordDisplay entries={filteredEntries} />
      </div>
    </div>
  );
};

export default Dictionary;
