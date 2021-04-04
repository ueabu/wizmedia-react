import React from 'react';
import './ProjectType.css'
import { withRouter } from "react-router-dom";
import CollectionOfLogos from '../../pages/CollectionOfLogos/CollectionOfLogos'
import WhoIsWhoAwards from '../../pages/WhoIsWhoAwards/WhoIsWhoAwards'
import CollectionOfFlyers from '../../pages/CollectionOfFlyers/CollectionOfFlyers'
import CollectionOfVideos from '../../pages/CollectionOfVideos/CollectionOfVideos'


class ProjectType extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLogo: '',
            backgroundImageZoom: window.innerWidth < 650 ? '400%' : '100%'
        }
    }

    componentDidMount() {
        this.importImage()
    }


    importImage = () => {
        import(`../../assets/${this.props.imgsrc}`)
            .then(image => {
                this.setState({
                    imageLogo: image.default
                })
            });
    }

    goToSelectedProject = () => {

        // window.scrollTo(0,0);

        document.getElementsByClassName("homesection")[0].style.display = 'none';
        document.getElementsByClassName("project_description")[0].style.display = 'none';
        document.getElementsByClassName("project_description")[1].style.display = 'none';
        document.getElementsByClassName("project_description")[2].style.display = 'none';
        document.getElementsByClassName("project_description")[3].style.display = 'none';

        if(this.props.name == "logos"){
            document.getElementsByClassName("project_expanded")[0].style.display = 'block';
        }

        if(this.props.name == "whoiswho"){
            document.getElementsByClassName("project_expanded")[1].style.display = 'block';
        }

        if(this.props.name == "flyers"){
            document.getElementsByClassName("project_expanded")[2].style.display = 'block';
        }

        if(this.props.name == "videos"){
            document.getElementsByClassName("project_expanded")[3].style.display = 'block';
        }
        
        // console.log('yaaa')
      

    }

    windowZoomUpdate = () => {
        if (window.innerWidth < 650) {
            this.setState({
                backgroundImageZoom: '400%'

            })
        } else {
            this.setState({
                backgroundImageZoom: '100%'

            })
        }
    }

    render() {
        window.addEventListener("resize", this.windowZoomUpdate);
        console.log(this.props.name)

        return (
            <div id={this.props.name}>
                <div className="project_description">
                    <div onClick={this.goToSelectedProject} id="viewProject" className={`view-case-study projects-load`}>
                        <span></span>
                        <span></span>
                    </div>
                    <section className="projectSection" id={this.props.name}
                        style={{
                            backgroundImage: `url(${this.state.imageLogo})`,
                            backgroundSize: `${this.state.backgroundImageZoom}`,
                            // backgroundSize: '100%',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="project-container"
                            style={{
                                background: `${this.props.color}`,
                            }}
                        >
                            <div className="project-header"
                                style={{
                                    color: this.props.textcolor
                                }}
                            >
                                <div className="full-line"
                                    style={{
                                        background: this.props.textcolor
                                    }}
                                ></div>
                                <span>
                                    <h4>WORK</h4>
                                    <h4>{this.props.id}</h4>
                                </span>
                            </div>
                            <div className="project-details"
                                style={{
                                    color: this.props.textcolor
                                }}
                            >
                                <h4>{this.props.type}</h4>
                                <h1>{this.props.title}</h1>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="project_expanded">
                    <div style={{display: this.props.name == 'logos' ? 'block' : 'none'}}>
                        <CollectionOfLogos></CollectionOfLogos>
                    </div>
                    <div style={{display: this.props.name == 'whoiswho' ? 'block' : 'none'}}>
                        <WhoIsWhoAwards></WhoIsWhoAwards>
                    </div>
                    <div style={{display: this.props.name == 'flyers' ? 'block' : 'none'}}>
                        <CollectionOfFlyers></CollectionOfFlyers>
                    </div>
                    <div style={{display: this.props.name == 'videos' ? 'block' : 'none'}}>
                        <CollectionOfVideos></CollectionOfVideos>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectType)