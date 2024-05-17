// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from 'embla-carousel-autoplay';
import { BookA, History, UserRound } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/lib/components/ui/carousel';

const pages: {
  title: string;
  href: string;
  description: string;
  image: React.ReactNode;
}[] = [
  {
    title: 'Timeline',
    href: '/timeline',
    description: 'See the history of Justin and Kailey so far!',
    image: <History />,
  },
  {
    title: "Shuckster's Dictionary",
    href: '/dictionary',
    description: "Justin and Kailey's whole vovabulary!",
    image: <BookA />,
  },
  {
    title: 'About Us',
    href: '/about',
    description: 'Learn a little about Justin and Kailey!',
    image: (
      <span className="flex items-center">
        <UserRound />
        <UserRound />
      </span>
    ),
  },
];

const HomeCarousel = () => {
  return (
    <div className="w-full max-w-xs">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: 'center',
          loop: true,
        }}
        className="m-5"
      >
        <CarouselContent className="">
          <CarouselItem className="">
            <Card className="">
              <CardContent className="flex aspect-square flex-col items-center justify-center p-6 text-center">
                <CardHeader>
                  <CardTitle>
                    Justin & Kailey&apos;s First Anniversary!
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-3xl">🎉</CardContent>
              </CardContent>
            </Card>
          </CarouselItem>
          {pages.map((page) => (
            <CarouselItem key={page.title} className="">
              <a href={page.href} className="">
                <Card className="">
                  <CardContent className="flex aspect-square flex-col items-center justify-center p-6 text-center">
                    <CardHeader>
                      <CardTitle>{page.title}</CardTitle>
                      <CardDescription>{page.description}</CardDescription>
                    </CardHeader>
                    <CardContent>{page.image}</CardContent>
                  </CardContent>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
