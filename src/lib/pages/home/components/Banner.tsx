import { X } from 'lucide-react';
import { useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="wrapper flex w-full items-center justify-between rounded-md bg-yellow-300 px-4 py-2 text-black shadow-md dark:bg-blue-500 dark:text-white">
      <span className="ml-9 flex-grow text-center font-bold">
        Surprise! Happy Anniversary ❤️
      </span>
      <X
        onClick={handleClose}
        className="ml-auto text-gray-600 dark:text-white"
      />
    </div>
  );
};

export default Banner;
