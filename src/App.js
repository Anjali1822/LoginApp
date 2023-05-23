import { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
//import ReactDOM from 'react-dom';
//import {Switch} from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
    <Router>
      <Routes>
      <Route exact path="/" element={ // Wrap the element in the `Route` component
            user && user._id ? (
              <Homepage setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          } />
          <Route path="/login" element={ // Wrap the element in the `Route` component
            <Login setLoginUser={setLoginUser} />
          } />
      {/* <Route exact path="/">
            {user && user._id ? (
              <Homepage setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route> */}
        {/* <Route exact path="/" element={<Homepage />} /> */}
        {/* <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
        <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </div>
   
//     // <div className="App">
//     //   <Router>
//     //     <Switch>
//     //       <Route exact path="/"><Homepage/></Route>
//     //       <Route path="/login"><Login /></Route>
//     //       <Route path="/register"><Register /></Route>
//     //     </Switch>
//     //   </Router>   
//     // </div>
   );
}

export default App;