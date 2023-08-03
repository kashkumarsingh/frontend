import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

//add fontwesome icons
library.add(fas, fab);

// APP Import
import App from "./App.jsx";
// Pages import
import HomePage from "./pages/HomePage.jsx";

// CSS Import
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ProjectPage from "./pages/ProjectPage.jsx";
//import ProjectCard from "./components/ProjectCard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/project/:projectName" element={<ProjectPage/>}/>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
