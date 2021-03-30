import React from 'react';
import './CollectionOfVideos.css'
import Nav from '../../components/Nav/Nav'

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

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

class collectionOfVideos extends React.Component {

    constructor(props) {
        super(props)
       this.images = [
            {
                original: 'https://player.vimeo.com/video/504183545',
                thumbnail: 'https://player.vimeo.com/video/504183545',
                embedUrl: 'https://player.vimeo.com/video/504183545',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/504183712',
                thumbnail: 'https://player.vimeo.com/video/504183712',
                embedUrl: 'https://player.vimeo.com/video/504183712',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/504183426',
                thumbnail: 'https://player.vimeo.com/video/504183426',
                embedUrl: 'https://player.vimeo.com/video/504183426',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/504186674',
                thumbnail: 'https://player.vimeo.com/video/504186674',
                embedUrl: 'https://player.vimeo.com/video/504186674',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/504183676',
                thumbnail: 'https://player.vimeo.com/video/504183676',
                embedUrl: 'https://player.vimeo.com/video/504183676',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/507687582',
                thumbnail: 'https://player.vimeo.com/video/507687582',
                embedUrl: 'https://player.vimeo.com/video/507687582',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/507973588',
                thumbnail: 'https://player.vimeo.com/video/507973588',
                embedUrl: 'https://player.vimeo.com/video/507973588',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/507977762',
                thumbnail: 'https://player.vimeo.com/video/507977762',
                embedUrl: 'https://player.vimeo.com/video/507977762',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/507980960',
                thumbnail: 'https://player.vimeo.com/video/507980960',
                embedUrl: 'https://player.vimeo.com/video/507980960',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/507983722',
                thumbnail: 'https://player.vimeo.com/video/507983722',
                embedUrl: 'https://player.vimeo.com/video/507983722',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/507985126',
                thumbnail: 'https://player.vimeo.com/video/507985126',
                embedUrl: 'https://player.vimeo.com/video/507985126',
                renderItem: this._renderVideo.bind(this)
            },
            {
                original: 'https://player.vimeo.com/video/507994831',
                thumbnail: 'https://player.vimeo.com/video/507994831',
                embedUrl: 'https://player.vimeo.com/video/507994831',
                renderItem: this._renderVideo.bind(this)
            },
        ];
    }

    importImage = (imagename) => {
        return import(`../../assets/images/logos/${imagename}`)
    }

    goback = () => {
        window.location.href = "/home#videos"

        // window.history.back()
    }

    _renderVideo = (item) => {
        return (
          <div>
                <div className='video-wrapper'>
                    <iframe src={item.embedUrl} width="300" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
          </div>
        );
    }


    render() {
        return (
            <div>
                <div onClick={this.goback} id="viewProject-wiw" className={`view-case-study-wiw projects-load-wiw`}>
                    <span></span>
                    <span></span>
                </div>
                <Nav />
                <section className="collectionOfVideosSection">
                    <div className="collectionOfVideosContainer">
                        <div className="collectionOfVideosLandingPage">
                            <div className="collectionOfVideos-text-background">
                                <div className="collectionOfVideos-left-side">
                                    <h4>CLIENT</h4>
                                    <p>
                                        Collection of Flyers
                                </p>
                                    <h4>PROJECT</h4>
                                    <p>
                                        Branding & Flyer Design
                                </p>
                                </div>
                                <div className="collectionOfVideos-right-side">
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
                    <ImageGallery 
                        items={this.images}
                        showPlayButton={false}
                     />
                </div>
            </div>

        );
    }
}

export default collectionOfVideos