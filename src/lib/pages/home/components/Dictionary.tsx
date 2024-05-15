import { Badge } from '@/lib/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/lib/components/ui/dialog';

interface WordDisplayProps {
  entries: string[][];
}

const WordDisplay = ({ entries }: WordDisplayProps) => {
  return (
    <div className="flex flex-col justify-center">
      {entries.map((entry) => (
        <Dialog>
          <DialogTrigger>
            <div
              key={entry[0]}
              className="m-2 flex-shrink-0 rounded-lg border border-gray-300 bg-white p-4 text-left text-black shadow-sm dark:bg-slate-50"
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
          </DialogTrigger>
          <DialogContent>
            <div
              key={entry[0]}
              className="rounded-lg bg-white p-4 text-black shadow-sm dark:bg-slate-50"
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
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default WordDisplay;
