import { useSelector } from "react-redux";
import selectors from "../redux/reducers/details/selectors";
import Loading from "../components/Loading";

function Details() {
  const name = useSelector(selectors.name);
  const birthYear = useSelector(selectors.birthYear);
  const skinColor = useSelector(selectors.skinColor);
  const mass = useSelector(selectors.mass);
  const loading = useSelector(selectors.loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{name}</h1>
      <h4>{birthYear}</h4>
      <p>Skin: {skinColor}</p>
      <p>Mass: {mass}</p>
    </div>
  );
}

export default Details;
