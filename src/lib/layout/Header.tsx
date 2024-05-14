import { useLocation } from 'react-router-dom';

import Search from '../pages/home/components/Search';
import { ThemeToggle } from '@/lib/components/theme-toggle';

const Header = () => {
  const location = useLocation(); // Get the current location

  // Check if the current location is the home page
  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-amber-200/50 backdrop-blur-md dark:bg-blue-950/10">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div className="text-l font-semibold">Shuckster&apos;s Dictionary</div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
      {isHomePage && (
        // <div className="mx-auto flex items-center justify-between bg-amber-100/80 py-2 backdrop-blur-md">
        //   Search
        // </div>
        <section className="wrapper mx-auto flex items-center justify-between py-2">
          <div className="mx-auto w-full">
            <Search />
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
