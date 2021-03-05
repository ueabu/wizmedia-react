import React from 'react'
import { Redirect } from 'react-router-dom';
import animationsvg from '../../svg/animation/200x200/sprite_60fps.svg'
import './Animation.css';


var animationBackgroundStyle = {
  backgroundImage: `url(${animationsvg})`
};


class Animation extends React.Component {

  constructor(){
    super()
    this.state = {
      redirect: false
    }
  }

  componentDidMount(){
    this.redirectAfterAnimation = setTimeout(() => this.setState({ redirect: true }), 2000)
  }

  componentWillUnmount(){
    clearTimeout(this.redirectAfterAnimation)
  }

  render() {
    if (this)
    return (
      this.state.redirect ? <Redirect to="/home"/>:
      <div className="Animation">
        <header className="App-header">
          <div className="animation-preloader">
            <div className="shapeshifter play" style={animationBackgroundStyle} >
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Animation;
