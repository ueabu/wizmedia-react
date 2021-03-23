import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Animation from './pages/Animation/Animation'
import Home from './pages/Home/Home'
import CollectionOfLogos from './pages/CollectionOfLogos/CollectionOfLogos'
import WhoIsWhoAwards from './pages/WhoIsWhoAwards/WhoIsWhoAwards'
import Nav from './components/Nav/Nav'
import Flyers from './pages/Flyers/Flyers'

class App extends React.Component {
  render() {
    return (
      <main>
        {/* <Nav /> */}
        <Router>
          <Switch>
            <Route path="/" exact component={Animation} />
            <Route path="/home" exact component={Home} />
            <Route path="/logos" exact component={CollectionOfLogos} />
            <Route path="/whoiswho" exact component={WhoIsWhoAwards} />
            <Route path="/flyer" exact component={Flyers} />
            
          </Switch>
        </Router>
      </main>)
  }
}

export default App;
