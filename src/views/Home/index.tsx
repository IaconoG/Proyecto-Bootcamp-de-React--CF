import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <>
      <main>
        <h1>Home</h1>
        <button>
          <Link to="/dashboard">Comenzar</Link>
        </button>
      </main>
    </>
  );
};

export default Home;
