import { useEffect, useState } from "react";
import Login from "./components/Login/Login.js";
import MainHeader from "./components/MainHeader/MainHeader.js";
import Home from "./components/Home/Home.js";
import AuthContext from "./store/auth-context.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    if (JSON.parse(localStorage.getItem("isLoggedUser")) !== null) {
      return JSON.parse(localStorage.getItem("isLoggedUser")).isLogged;
    } else {
      return false;
    }
  });

  console.log(loggedIn);

  useEffect(() => {
    const storedLoggedUserData = JSON.parse(
      localStorage.getItem("isLoggedUser")
    );
    if (storedLoggedUserData !== null) {
      if (storedLoggedUserData.isLogged === true) {
        setLoggedIn(true);
      }
    }
  }, []);

  const loginHandler = (user, password) => {
    const loggedUser = localStorage.setItem(
      "isLoggedUser",
      JSON.stringify({ username: user, isLogged: true })
    );
    setLoggedIn(true);
  };
  const LogoutHandler = () => {
    localStorage.removeItem("isLoggedUser");
    setLoggedIn(false);
  };
  return (
    <>
      <AuthContext.Provider value={{
        loggedIn:loggedIn,
        onLogout:LogoutHandler
      }}>
      <MainHeader  onLogout={LogoutHandler} />
      <main>
        {!loggedIn && <Login onLogin={loginHandler} />}
        {loggedIn && <Home />}
      </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;

//{}
//[]