import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/lib/components/ui/dialog';

const images = [
  'https://utfs.io/f/73b60dc3-9028-4f28-b879-f8c05bb99d37-xq66pv.JPEG',
  'https://utfs.io/f/baea88db-c153-493d-b772-50bc13bdaebc-1xf5as.png',
  'https://utfs.io/f/5ee852d1-88de-4afd-80d7-45bd90565679-debk18.JPEG',
  'https://utfs.io/f/31c68226-5cb4-4f01-9d50-1eec26018182-1x9ebn.png',
  'https://utfs.io/f/e2d4abeb-e808-4134-8d0d-d68344680948-1x9ezw.png',
  'https://utfs.io/f/20580309-f263-46da-ae30-10d7398de833-1x9ezp.png',
  'https://utfs.io/f/b2a7a809-7d0c-458a-8575-7b72643f2488-1x9w6w.png',
  'https://utfs.io/f/127e3ea9-5589-421b-b3c1-e43f42cb849f-1x9e89.png',
  'https://utfs.io/f/47b7e5c3-8636-41f6-a1fd-161558df8890-1xej08.png',
  'https://utfs.io/f/de5d1ed5-8b26-4773-9656-6950082c1c2c-1xf29k.png',
  'https://utfs.io/f/90cc3109-1888-44f9-b39a-55015afa5c6a-1xf0n0.png',
  'https://utfs.io/f/1f447f85-19bf-49b6-8552-1c2622355edc-1xf26u.png',
  'https://utfs.io/f/32bf1289-ef90-4060-8c9c-fe7ffcb8963c-1x9w7s.png',
  'https://utfs.io/f/c7cfe050-9011-43bb-b0b9-7e47f82596cb-1xf2bc.png',
];
interface ImageCardProps {
  src: string;
}

const ImageCard = ({ src }: ImageCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <img src={src} alt="Placeholder" className="h-auto w-full" />
    </div>
  );
};

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <Dialog>
            <DialogTrigger>
              <ImageCard key={image} src={image} />
            </DialogTrigger>
            <DialogContent>
              <ImageCard key={image} src={image} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};
export default About;
