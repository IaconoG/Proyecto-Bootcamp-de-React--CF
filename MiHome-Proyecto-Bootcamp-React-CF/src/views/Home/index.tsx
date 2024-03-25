import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar page="" />
      <h1>Home</h1>
      <button>
        <Link to="/dashboard">Comenzar</Link>
      </button>
    </>
  );
};

export default Home;
