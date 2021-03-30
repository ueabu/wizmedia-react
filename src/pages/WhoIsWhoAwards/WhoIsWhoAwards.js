import React from 'react';
import './WhoIsWhoAwards.css'
import Nav from '../../components/Nav/Nav'
import whoiswhoImage from '../../assets/images/work-1/project-01-WIWA-03.png'
import whoiswhoImage2 from '../../assets/images/work-1/project01-WIWA-04.png'
import whoiswhoImage3 from '../../assets/images/work-1/project01-WIWA-05.png'
import whoiswhoImage4 from '../../assets/images/work-1/project01-WIWA-06.png'
import whoiswhoImage5 from '../../assets/images/work-1/project01-WIWA-07.png'
import whoiswhoImage6 from '../../assets/images/work-1/project01-WIWA-08.png'


class WhoIsWhoAwards extends React.Component {


    goback = () => {
        window.location.href = "/home#whoiswho"

        // window.history.back()
    }

    render() {
        return (
            <div>

                <Nav />
                <div onClick={this.goback} id="viewProject-wiw" className={`view-case-study-wiw projects-load-wiw`}>
                    <span></span>
                    <span></span>
                </div>
                <section className="WhoIsWhoAwardsSection">
                    <div className="WhoIsWhoAwardsContainer">
                        <div className="WhoIsWhoAwardsLandingPage">
                            <div className="WhoIsWhoAwards-text-background">
                                <div className="WhoIsWhoAwards-left-side">
                                    <h4>CLIENT</h4>
                                    <p>
                                        Who is Who Awards
                                </p>
                                    <h4>PROJECT</h4>
                                    <p>
                                        Branding & Event branding
                                </p>
                                </div>
                                <div className="WhoIsWhoAwards-right-side">
                                    <h4>DETAILS</h4>
                                    <p>An award agency that recognizes that recognizes individuals from different vocations.
                                    It is also a new working platform.<br></br>
                                    Who is Who Awards&reg; is focused on spotting and awarding the best individuals,
                                    companies and organizations in various feilds and walk of life with the aim of
                                    motivating competitors to deliver better products and services while inspiring the
                                    next generation to strive for better.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="WhoIsWhoAwardsSectionSample">
                    <div className="WhoIsWhoAwardsSampleContainer">
                        <div className="WhoIsWhoAwardsSampleImageDiv">
                            <img src={whoiswhoImage} className="WhoIsWhoAwardsSampleImage"></img>
                        </div>
                    </div>
                </section>
                <section className="WhoIsWhoAwardsSectionSample">
                    <div className="WhoIsWhoAwardsSampleContainer">
                        <div className="WhoIsWhoAwardsSampleImageDiv">
                            <img src={whoiswhoImage2} className="WhoIsWhoAwardsSampleImage"></img>
                        </div>
                    </div>
                </section>
                <section className="WhoIsWhoAwardsSectionSample">
                    <div className="WhoIsWhoAwardsSampleContainer">
                        <div className="WhoIsWhoAwardsSampleImageDiv">
                            <img src={whoiswhoImage3} className="WhoIsWhoAwardsSampleImage"></img>
                        </div>
                    </div>
                </section>
                <section className="WhoIsWhoAwardsSectionSample">
                    <div className="WhoIsWhoAwardsSampleContainer">
                        <div className="WhoIsWhoAwardsSampleImageDiv">
                            <img src={whoiswhoImage4} className="WhoIsWhoAwardsSampleImage"></img>
                        </div>
                    </div>
                </section>
                <section className="WhoIsWhoAwardsSectionSample">
                    <div className="WhoIsWhoAwardsSampleContainer">
                        <div className="WhoIsWhoAwardsSampleImageDiv">
                            <img src={whoiswhoImage5} className="WhoIsWhoAwardsSampleImage"></img>
                        </div>
                    </div>
                </section>
                <section className="WhoIsWhoAwardsSectionSample">
                    <div className="WhoIsWhoAwardsSampleContainer">
                        <div className="WhoIsWhoAwardsSampleImageDiv">
                            <img src={whoiswhoImage6} className="WhoIsWhoAwardsSampleImage"></img>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WhoIsWhoAwards