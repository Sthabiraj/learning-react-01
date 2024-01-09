import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl">React for context API</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
