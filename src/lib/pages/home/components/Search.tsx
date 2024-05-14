/* eslint-disable jsx-a11y/control-has-associated-label */
// import { Command, CommandInput } from '@/lib/components/ui/command';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex w-full items-center">
      <input
        className="w-full rounded bg-slate-50 py-2 pl-2 text-black"
        placeholder="Search"
      />
      <Search className="-ml-9 shrink-0 text-slate-400 opacity-50" />
    </div>
  );
};

export default SearchBar;
