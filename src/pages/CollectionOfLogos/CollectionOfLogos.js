import React from 'react';
import './CollectionOfLogos.css'
import LogoPage from '../../components/LogoPage/LogoPage'
import Nav from '../../components/Nav/Nav'

class CollectionOfLogos extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logosPageData: [
                {
                    imagesrc: 'Logo-01.png',
                    backgroundColor: '#323232',
                    textDescription: 'A parent company to the well-known hiking group; The Hike Team, engages fun outdoor activities like hiking and climbing mountains along guided trails while socializing and networking with individuals from all walks of life.',
                    textColor: '#ffffff'
                },
                {
                    imagesrc: 'Logo-02.png',
                    backgroundColor: '#ffffff',
                    textDescription: 'A jewelry accessory shop that crafts handmade bracelets, necklaces, brooches, bangles and much more.',
                    textColor: '#000000'
                },
                {
                    imagesrc: 'Logo-03.png',
                    backgroundColor: '#323232',
                    textDescription: 'A church mens group with a platform that empowers and builds men to be leaders in their society and homes. They cater to men mentally, emotionally, spiritually and financially.',
                    textColor: '#ffffff'
                },
                {
                    imagesrc: 'Logo-04.png',
                    backgroundColor: '#ffffff',
                    textDescription: 'A parent company to the well-known hiking group; The Hike Team, engages fun outdoor activities like hiking and climbing mountains along guided trails while socializing and networking with individuals from all walks of life.',
                    textColor: '#008000'
                },
                {
                    imagesrc: 'Logo-05.png',
                    backgroundColor: '#e0115f',
                    textDescription: 'Loyal To The Grind is a brand and movement created by professional basketball player Samuel Abu based in Spain.',
                    textColor: '#000000'
                },
                {
                    imagesrc: 'Logo-06.png',
                    backgroundColor: '#1d2951',
                    textDescription: 'LPrive is a luxury logistics company that offers transportation security for business individuals, artists and government officials.',
                    textColor: '#ffffff'
                },
                {
                    imagesrc: 'Logo-07.png',
                    backgroundColor: '#ffffff',
                    textDescription: 'Helping hands is a community group that offers help to the less privileged individuals, who have been displaced due to unforeseen circumstances. They offer food and clothing weekly as well as government aid where necessary.',
                    textColor: '#000000'
                },
                {
                    imagesrc: 'Logo-08.png',
                    backgroundColor: '#871f78',
                    textDescription: 'An awarding agency that recognizes individuals from different vocations. Also a networking platform.',
                    textColor: '#ffffff'
                },
                {
                    imagesrc: 'Logo-09.png',
                    backgroundColor: '#323232',
                    textDescription: 'A crypto-currency trader.',
                    textColor: '#ffffff'
                },
                {
                    imagesrc: 'Logo-10.png',
                    backgroundColor: '#ffffff',
                    textDescription: 'A Congolese spicy sauce eaten with barbeque and fish meals.',
                    textColor: '#000000'
                },
                {
                    imagesrc: 'Logo-11.png',
                    backgroundColor: '#871f78',
                    textDescription: 'Best Morning Star provides home health care services for children and adults.',
                    textColor: '#ffffff'
                },
                {
                    imagesrc: 'Logo-12.png',
                    backgroundColor: '#ffffff',
                    textDescription: 'A clothing brand aimed at designing humurous contest printed on apparel.',
                    textColor: '#000000'
                },
                {
                    imagesrc: 'Logo-13.png',
                    backgroundColor: '#ffe5b5',
                    textDescription: 'A real estate company focused on refurbishing old homes and selling them off.',
                    textColor: '#ffaf1c'
                },
                {
                    imagesrc: 'Logo-14.png',
                    backgroundColor: '#ffe5b5',
                    textDescription: 'A real estate company old homes and selling them off.',
                    textColor: '#ffaf1c'
                }
            ]
        }
    }

    importImage = (imagename) => {
        return import(`../../assets/images/logos/${imagename}`)
    }

    goback = () => {
        window.location.href = "/home#logos"
    }


    render() {
        console.log(this.props)

        return (
            <div>
                <div onClick={this.goback} id="viewProject-wiw" className={`view-case-study-wiw projects-load-wiw`}>
                    <span></span>
                    <span></span>
                </div>
                <Nav />
                <section className="collectionOfLogosSection">
                    <div className="collectionOfLogosContainer">
                        <div className="collectionOfLogosLandingPage">
                            <div className="collectionOfLogos-text-background">
                                <div className="collectionOfLogos-left-side">
                                    <h4>CLIENT</h4>
                                    <p>
                                        Collection of Logos
                                    </p>
                                    <h4>PROJECT</h4>
                                    <p>
                                        Branding & Logo Design
                                    </p>
                                </div>
                                <div className="collectionOfLogos-right-side">
                                    <h4>DETAILS</h4>
                                    <p>
                                        A collection of logos I've designed over the last few years. Each one of
                                        these started off as an idea on a sketchpad or napkin, and
                                        miraculously made its way to my computer. This is where they are brought to life
                                        with illustrator's vector magic.<br></br> A great hand full
                                        of the work below was revised and amended to properly fit the aesthetic
                                        needs of the client.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    this.state.logosPageData.map((data) => {
                        return (
                            <LogoPage
                                key={data.imagesrc}
                                imagesrc={data.imagesrc}
                                backgroundColor={data.backgroundColor}
                                textDescription={data.textDescription}
                                textColor={data.textColor}

                            />
                        );
                    })
                }
            </div>

        );
    }
}

export default CollectionOfLogos