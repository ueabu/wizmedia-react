import React from 'react';
import './CollectionOfFlyers.css'
import LogoPage from '../../components/LogoPage/LogoPage'
import Nav from '../../components/Nav/Nav'

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

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


class CollectionOfFlyers extends React.Component {

    constructor(props) {
        super(props)
        SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
                                        Collection of Logos
                                </p>
                                    <h4>PROJECT</h4>
                                    <p>
                                        Branding & Logo Design
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


                <div style={{ padding: '100px', left: '20px', height: '100vh', position: 'relative' }}>
                    <div style={{ position: 'absolute' }}>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={3}
                            // navigation
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer1} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer2} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer3} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer4} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer5} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer6} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer7} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer8} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer9} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer10} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer11} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer12} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer13} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img style={{ width: '100%' }} src={flyer14} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* {

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
                } */}
            </div>

        );
    }
}

export default CollectionOfFlyers