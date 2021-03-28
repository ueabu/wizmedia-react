import React from 'react';
import './CollectionOfFlyers.css'
import Nav from '../../components/Nav/Nav'

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';


import flyer1 from '../../assets/images/flyers/flyer-1.png'
import flyer2 from '../../assets/images/flyers/flyer-2.png'
import flyer3 from '../../assets/images/flyers/flyer-3.png'
import flyer4 from '../../assets/images/flyers/flyer-4.png'
import flyer5 from '../../assets/images/flyers/flyer-5.png'
import flyer6 from '../../assets/images/flyers/flyer-6.png'
import flyer7 from '../../assets/images/flyers/flyer-7.png'
import flyer8 from '../../assets/images/flyers/flyer-8.png'
import flyer9 from '../../assets/images/flyers/flyer-9.png'
import flyer10 from '../../assets/images/flyers/flyer-10.png'
import flyer11 from '../../assets/images/flyers/flyer-11.png'
import flyer12 from '../../assets/images/flyers/flyer-12.png'
import flyer13 from '../../assets/images/flyers/flyer-13.png'
import flyer14 from '../../assets/images/flyers/flyer-14.png'

const images = [
    {
        original: flyer1,
        thumbnail: flyer1,
    },
    {
        original: flyer2,
        thumbnail: flyer2,
    },
    {
        original: flyer3,
        thumbnail: flyer3,
    },
    {
        original: flyer4,
        thumbnail: flyer4,
    },
    {
        original: flyer5,
        thumbnail: flyer5,
    },
    {
        original: flyer6,
        thumbnail: flyer6,
    },
    {
        original: flyer7,
        thumbnail: flyer7,
    },
    {
        original: flyer8,
        thumbnail: flyer8,
    },
    {
        original: flyer9,
        thumbnail: flyer9,
    },
    {
        original: flyer10,
        thumbnail: flyer10,
    },
    {
        original: flyer11,
        thumbnail: flyer11,
    },
    {
        original: flyer12,
        thumbnail: flyer12,
    },
    {
        original: flyer13,
        thumbnail: flyer13,
    },
    {
        original: flyer14,
        thumbnail: flyer14,
    }
];

const fullPageStyle = {
    position: 'relative', 
    left: '40px', 
    width: '70%',
    margin:'auto', 
    alignContent: 'center'
}

const phoneViewStyle = {
    position: 'relative', 
    paddingTop: '50%',
    height: '100vh',
    width: '100%', 
    margin:'auto', 
    alignContent: 'center'
}

class CollectionOfFlyers extends React.Component {

    constructor(props) {
        super(props)
        SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    }

    importImage = (imagename) => {
        return import(`../../assets/images/logos/${imagename}`)
    }

    goback = () => {
        window.history.back()
    }


    render() {
        return (
            <div>
                <div onClick={this.goback} id="viewProject-wiw" className={`view-case-study-wiw projects-load-wiw`}>
                    <span></span>
                    <span></span>
                </div>
                <Nav />
                <section className="CollectionOfFlyersSection">
                    <div className="CollectionOfFlyersContainer">
                        <div className="CollectionOfFlyersLandingPage">
                            <div className="CollectionOfFlyers-text-background">
                                <div className="CollectionOfFlyers-left-side">
                                    <h4>CLIENT</h4>
                                    <p>
                                        Collection of Flyers
                                </p>
                                    <h4>PROJECT</h4>
                                    <p>
                                        Branding & Flyer Design
                                </p>
                                </div>
                                <div className="CollectionOfFlyers-right-side">
                                    <h4>DETAILS</h4>
                                    <p>A collection of logos I've designed over the last few years. Each one of
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

                <div style={window.innerWidth < 650 ? phoneViewStyle : fullPageStyle}>
                    <ImageGallery items={images} />
                </div>
            </div>

        );
    }
}

export default CollectionOfFlyers