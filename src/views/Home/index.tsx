import { Link } from "react-router-dom";
import Navbar from "../../components/Sidebar";

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <button>
        <Link to="/dashboard">Comenzar</Link>
      </button>
    </>
  );
};

export default Home;
