import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import Home from './Pages/Home/Index'
import Details from './Pages/Details/'
import Likes from './Pages/Likes/'
import Explore from './Pages/Explore/Index'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/details/:id" component={Details}/>
            <Route exact path="/likes" component={Likes}/>
            <Route exact path="/explore" component={Explore}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
