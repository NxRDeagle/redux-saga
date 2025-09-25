import { useSelector } from "react-redux";
import { Link } from "react-router";

function App() {
  const store = useSelector((store) => store);
  console.log(store);

  return (
    <div>
      <h1>SAGA TEST</h1>
      <div>
        <Link to="/blog">Open blog</Link>
      </div>
    </div>
  );
}

export default App;
