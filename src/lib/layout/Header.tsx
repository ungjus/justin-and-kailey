import { ThemeToggle } from '@/lib/components/theme-toggle';

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full border-b backdrop-blur-md">
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
