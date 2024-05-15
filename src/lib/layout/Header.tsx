import { ThemeToggle } from '@/lib/components/theme-toggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-amber-200 backdrop-blur-md dark:bg-blue-950">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div className="text-l font-semibold">Shuckster&apos;s Dictionary</div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;
