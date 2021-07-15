import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
