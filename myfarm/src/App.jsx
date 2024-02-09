// // src/App.jsx

// import React from 'react';
// import Home from './components/Home';
// const App = () => {
//   return (
//     <div>
//       {/* Include the Home component */}
//       <Home />
//     </div>
//   );
// };

// export default App;


import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'
// import Quiz from './components/Quiz'
// import RandomQuiz from './components/RandomQuiz'



function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          {/* <PrivateRoute component={RandomQuiz} path="/quiz" exact /> */}
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App