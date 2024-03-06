import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import App from "./App.jsx";
import { registerLicense } from "@syncfusion/ej2-base";
import Login from "./components/LogIn/Login.jsx";

import { Faturat } from "./Client/Client.jsx";
import { HomePage } from "./Client/Client.jsx";

import Client from "./Client/Client.jsx";
import Sidebar from "./Client/Components/Sidebar/Sidebar.jsx";
import { Home } from "@mui/icons-material";
import Prova from "./prova.jsx";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF5cWWBCfEx3WmFZfVpgc19DYFZRRmY/P1ZhSXxXdkRjW35XdXJXRWhVV0I="
);

const Root = () => {
  const [isError, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setClient] = useState(true);
  const [vatNumber, setVatNumber] = useState(null);

  const navigate = useNavigate();

  const HomeMocks = () => {
    return (
      <>
        <Sidebar setSidebarPosition={setSidebarPosition} />
        <span>Homeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</span>
      </>
    );
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") != "true") {
      navigate("/login");
    }
  });

  const handleLogIn = async (username, password) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/check-credentials?username=${username}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setError(result.message);
        console.log(result.container);
        if (result.message === "Credentials are valid!") {
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          if (result.container.role === "systemadmin") {
            navigate("/admin");
          } else if (result.container.role === "compnyuser") {
            navigate("/client");
          }
        } else {
          setError("Invalid credentials");
        }
      } else if (response.status === 401) {
        const errorResult = await response.json();
        setError(errorResult.message);
      } else {
        setError("An error occurred");
      }
    } catch (e) {
      setError("An error occurred");
    }
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn && storedLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const [sidebarPosition, setSidebarPosition] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/admin" element={<App />} />
        <Route path="/client" element={<Client />} />
        <Route
          path="/client/home"
          element={
            <HomePage
              sidebarPosition={sidebarPosition}
              setSidebarPosition={setSidebarPosition}
            />
          }
        />
        <Route path="/client/faturattt" element={<HomeMocks />} />
        <Route path="/client/prova" element={<HomeMocks />} />
        <Route path="/client/settings" element={<HomeMocks />} />
        <Route
          path="/login"
          element={<Login handleLogIn={handleLogIn} isError={isError} />}
        />
        <Route
          path="/client/faturat"
          element={
            <Faturat
              sidebarPosition={sidebarPosition}
              setSidebarPosition={setSidebarPosition}
            />
          }
        />
      </Routes>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Router>
);
