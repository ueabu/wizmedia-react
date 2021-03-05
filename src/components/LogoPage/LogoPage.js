import React from 'react';
import './LogoPage.css'
import logoImage from '../../assets/images/logos/Logo-01.png'

class LogoPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLogo: ''
        }
    }

    componentDidMount(){
        this.importImage()
    }


    importImage = () => {
        import(`../../assets/images/logos/${this.props.imagesrc}`)
        .then(image => {
            this.setState({
                imageLogo: image.default
            })
        });
    }

    render() {
        return (
            <section className="logoPageSection">
                <div style={{
                    background: this.props.backgroundColor
                }} 

                className="logoPageContainer">
                    <div className="logoPageImageAndTextDiv">
                        <img className="logoPageImage" src={this.state.imageLogo}></img>
                        <div 
                            style={{
                                color: this.props.textColor
                            }}
                        className="logoPageTextPosition">
                            <p>
                                {this.props.textDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LogoPage