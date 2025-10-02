import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import selectors from "../redux/reducers/people/selectors";
import { LOAD_USERS } from "../redux/reducers/people/actions";
import Pagination from "./Pagination";
import Loading from "./Loading";

function PeopleTable() {
  const people = useSelector(selectors.data);
  const page = useSelector(selectors.page);
  const search = useSelector(selectors.search);
  const count = useSelector(selectors.count);
  const loading = useSelector(selectors.loading);
  const dispatch = useDispatch();

  if (!people && !loading && !search) {
    dispatch({
      type: LOAD_USERS,
      payload: { page: 1, search: "" },
    });
  }

  const changePage = (newPage) =>
    dispatch({
      type: LOAD_USERS,
      payload: {
        page: newPage,
        search,
      },
    });

  const changeSearch = (e) =>
    dispatch({
      type: LOAD_USERS,
      payload: {
        page: 1,
        search: e.target.value,
      },
    });

  return (
    <>
      <h1>
        Star Wars People
        <form style={{ display: "inline-block", marginLeft: 20 }}>
          <input
            style={{ padding: "8px 6px" }}
            type="text"
            value={search}
            placeholder="Search people..."
            onChange={changeSearch}
          />
        </form>
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table border={1} width="100%" cellPadding={6} cellSpacing={0}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth year</th>
                <th>Eye color</th>
                <th>Gender</th>
                <th>Hair color</th>
                <th>Height</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {people?.map((character) => {
                const id = character.url.replaceAll(/\D/g, "");

                return (
                  <tr key={character.name}>
                    <td>{character.name}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.eye_color}</td>
                    <td>{character.gender}</td>
                    <td>{character.hair_color}</td>
                    <td>{character.height}</td>
                    <td>
                      <Link to={`/people/${id}`}>Details</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination page={page} total={count} onChange={changePage} />
        </>
      )}
    </>
  );
}

export default PeopleTable;
