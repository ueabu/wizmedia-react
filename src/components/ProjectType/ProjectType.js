import React from 'react';
import './ProjectType.css'
import { createBrowserHistory as history} from 'history';


class ProjectType extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLogo: ''
        }
        // console.log(this.props)
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
        // window.open('/logos')
        console.log('clicked')
        window.location.href = this.props.to;

    }

    render() {
        return (
            // `url(${animationsvg})`
            <div>
                <div onClick={this.goToSelectedProject} id="viewProject" className={`view-case-study projects-load`}>
                    <span></span>
                    <span></span>
                </div>
                <section className="projectSection"
                    style={{
                        backgroundImage: `url(${this.state.imageLogo})`,
                        backgroundSize: '100%',
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
        );
    }
}

export default ProjectType