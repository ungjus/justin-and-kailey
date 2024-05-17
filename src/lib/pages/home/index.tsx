import Banner from './components/Banner';
import HomeCarousel from './components/HomeCarousel';

const Home = () => {
  return (
    <div className="wrapper">
      <Banner />
      <div className="flex justify-center">
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Home;
