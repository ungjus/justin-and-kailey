import Banner from './components/Banner';
import HomeCarousel from './components/HomeCarousel';

const Home = () => {
  return (
    <div className="wrapper">
      <Banner />
      <div className="flex justify-center">
        <HomeCarousel />
      </div>
      <img
        src="https://utfs.io/f/2018f8d5-2505-4942-89eb-5c9da1294985-819qza.jpg"
        alt="Kailey and Justin"
        className="item-center mx-auto flex size-1/2 justify-center rounded-lg"
      />
    </div>
  );
};

export default Home;
