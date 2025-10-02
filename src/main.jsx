import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { store, history } from "./redux";
import Routes from "./routes";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);
