import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Animation from './pages/Animation/Animation'
import Home from './pages/Home/Home'
import CollectionOfLogos from './pages/CollectionOfLogos/CollectionOfLogos'
import WhoIsWhoAwards from './pages/WhoIsWhoAwards/WhoIsWhoAwards'
import CollectionOfFlyers from './pages/CollectionOfFlyers/CollectionOfFlyers'
import CollectionOfVideos from './pages/CollectionOfVideos/CollectionOfVideos'


import Nav from './components/Nav/Nav'

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
            <Route path="/flyers" exact component={CollectionOfFlyers} />
            <Route path="/whoiswho" exact component={WhoIsWhoAwards} />
            <Route path="/videos" exact component={CollectionOfVideos} />
          </Switch>
        </Router>
      </main>)
  }
}

export default App;
