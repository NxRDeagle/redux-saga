import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { store, history } from "./redux";
import App from "./pages/App";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Provider>
);
