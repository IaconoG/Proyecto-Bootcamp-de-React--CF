import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <main>
      <h1>Landing Page</h1>
      <button>
        <Link to="/home">Comenzar</Link>
      </button>
    </main>
  );
};

export default LandingPage;
