import React from "react";
import Welcome from "./pages/Welcome";
import Instructions from "./pages/Instructions";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import ErrorPage from "./pages/ErrorPage";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import UserContextProvider from "./context/UserContext";
import "./App.css"


function App() {

 


  return (
   <>
   <div className="wall">
   <UserContextProvider>
   <Router>
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/instruction" element={<Instructions/>} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/result" element={<Result/>} />
      <Route path="/*" element={<ErrorPage/>} />
    </Routes>
   </Router>
   </UserContextProvider>


   </div>
   </>
  );
}

export default App;
