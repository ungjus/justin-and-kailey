import Dictionary from './components/Dictionary';
// import Search from './components/Search';

const Home = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8">
      {/* <Search /> */}
      <Dictionary />
    </div>
  );
};

export default Home;
