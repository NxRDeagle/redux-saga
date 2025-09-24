import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  console.log(store);

  return (
    <div>
      <p>SAGA TEST</p>
      <button onClick={() => dispatch({ type: "CLICK" })}>CLICK</button>
    </div>
  );
}

export default App;
