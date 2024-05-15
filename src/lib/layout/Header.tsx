import { Menu } from 'lucide-react';

import { ThemeToggle } from '@/lib/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/lib/components/ui/dropdown-menu';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-amber-200 backdrop-blur-md dark:bg-blue-950">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div className="text-l font-semibold">
          Justin & Kailey&apos;s 1st Anniversary
        </div>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Justin & Kailey</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a href="/">
                <DropdownMenuItem>Home</DropdownMenuItem>
              </a>
              <a href="/dictionary">
                <DropdownMenuItem>Dictionary</DropdownMenuItem>
              </a>
              <a href="/timeline">
                <DropdownMenuItem>Timeline</DropdownMenuItem>
              </a>
              <a href="/about">
                <DropdownMenuItem>About Us</DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;
