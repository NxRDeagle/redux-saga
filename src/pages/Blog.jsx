import { useDispatch, useSelector } from "react-redux";

function Blog() {
  const dispatch = useDispatch();
  const vehicles = useSelector((store) => store.app.vehicles);
  console.log(vehicles);

  const handleLoadData = () => {
    dispatch({ type: "LOAD_DATA" });
  };

  return (
    <div>
      BLOG
      <button onClick={handleLoadData}>LOAD DATA</button>
    </div>
  );
}

export default Blog;
