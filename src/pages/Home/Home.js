import React from 'react'
import Nav from '../../components/Nav/Nav'
import Type from '../../components/Type/Type'
import ProjectType from '../../components/ProjectType/ProjectType'
// import collectionOfLogos from '../../assets/images/backgroundImages/wallpaper-01.png'
// import whoiswhoawards from '../../assets/images/work-1/project01-background.png'
import ScrollSnap from "scroll-snap";
import './Home.css';
// import TypeIt from "typeit-react";
// import TypeIt from 'typeit';
// import AwesomeSlider from 'react-awesome-slider';
// import ScrollSnap from 'scroll-snap'

import 'react-awesome-slider/dist/styles.css';

function callback() {
  console.log("snapped");
}



class Home extends React.Component {

  container = React.createRef();


  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          image: 'images/backgroundImages/wallpaper-01.png',
          color: 'rgba(252, 233, 6, 0.89)',
          textcolor: '#000000',
          opacity: '0.89',
          id: '01',
          type: 'BRANDING & LOGO DESIGN',
          title: 'Collection Of Logos',
          to: '/logos'
        },
        {
          image: 'images/work-1/project01-background.png',
          color: 'rgba(147,112,219, 0.4)',
          textcolor: '#ffffff',
          opacity: '0.8',
          id: '02',
          type: 'BRANDING',
          title: 'Who Is Who Awards',
          to: '/whoiswho'
        },
        {
          image: 'images/work-1/project01-background.png',
          color: 'rgba(147,112,219, 0.4)',
          textcolor: '#ffffff',
          opacity: '0.8',
          id: '02',
          type: 'BRANDING',
          title: 'Collection Of Flyers',
          to: '/flyers'
        },
        {
          image: 'images/work-1/project01-background.png',
          color: 'rgba(147,112,219, 0.4)',
          textcolor: '#ffffff',
          opacity: '0.8',
          id: '02',
          type: 'BRANDING',
          title: 'Collection Of Videos',
          to: '/videos'
        },
      ]
    }
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  bindScrollSnap() {
    console.log('I have been called')
    const element = this.container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "0% 90%",
      timeOut: '0',
      threshold: 0.2,
      duration: 300,
      snapStop: true
    });

    snapElement.bind(callback);
  }

  // typewriteToInput = (input) => {
  //   TypeIt('#input', {
  //     strings: 'Alex MacArthur',
  //     waitUntilVisible: true
  //   }).go();
  // }


  render() {
    return (
      <div  className="home">
        {/* <AwesomeSlider> */}
        <Nav />
        <section id="container" ref={this.container}>
          <div id="hero">
            <div className="container">
              <h4>Hi, I'm Wisdom Abu&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Please scroll down</h4>

              <div className="typingContainer">
                <h1>
                  I progressive content manager & graphic designer
                </h1>
              </div>
              <section id="scrollid" className="scrollsectionclass">
                <p>Scroll</p>
                <a><span></span></a>
              </section>

            </div>
          </div>

        </section>
        {
          this.state.projects.map((data) => {
            return (
              <ProjectType
                key={data.image}
                imgsrc={data.image}
                color={data.color}
                id={data.id}
                type={data.type}
                textcolor={data.textcolor}
                title={data.title}
                opacity={data.opacity}
                to={data.to}

              />
            );
          })
        }
        {/* <ProjectType color='#fce906' opacity='0.8' backgroundImage={collectionOfLogos}/>
        <ProjectType color='#0000ff' opacity='0.8' backgroundImage={collectionOfLogos}/>
        <ProjectType color='#9370db' opacity='0.4' backgroundImage={whoiswhoawards}/> */}

        {/* </AwesomeSlider> */}
      </div>
    );
  }
}

export default Home;
