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
    <div className="relative w-full rounded-md bg-yellow-300 px-4 py-2 text-black shadow-md dark:bg-blue-500 dark:text-white">
      <div className="text-center">
        <span className="mt-5 block font-bold">
          Surprise! Happy Anniversary ❤️
        </span>
        <br />
        <span className="block">
          I wanted to make you something special so decided to make a website!
        </span>
        <span className="block">Take a look around and enjoy :)</span>
      </div>
      <X
        onClick={handleClose}
        className="absolute right-0 top-0 mr-2 mt-2 text-black dark:text-white"
      />
    </div>
  );
};

export default Banner;
