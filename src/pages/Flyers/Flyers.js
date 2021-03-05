import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import whoiswhoImage2 from '../../assets/images/work-1/project01-WIWA-04.png'
import whoiswhoImage3 from '../../assets/images/work-1/project01-WIWA-05.png'
import whoiswhoImage4 from '../../assets/images/work-1/project01-WIWA-06.png'
import whoiswhoImage5 from '../../assets/images/work-1/project01-WIWA-07.png'
import whoiswhoImage6 from '../../assets/images/work-1/project01-WIWA-08.png'


class Flyers extends React.Component {
    render() {
        return (
            <AwesomeSlider> 
                <div data-src={whoiswhoImage2}></div>
                <div data-src={whoiswhoImage3}></div>
                <div data-src={whoiswhoImage4}></div>

                {/* <div></div>
                <div></div> */}

            </AwesomeSlider>
        );
    }
}



export default Flyers