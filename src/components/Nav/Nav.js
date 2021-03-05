/**
 * Autho Uma Abu
 * 
 * Nav Page for the whole website
 */

import React from 'react'
import logoInMenu from '../../assets/images/WizMedia.png'

import './Nav.css';




class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            menudisplay: 'none',
            nav_background: 'rgba(0, 0, 0, 0)',
            //Individual displays for the contents of each tab.
            about_display: 'none',
            service_display: 'none',
            contact_display: 'none',

            //Individual IDs for the tabs them selves
            about_id: '',
            service_id: 'underline',
            contact_id: 'underline',

            //If the menu has been clicked, give a class of clicked so the
            //three lines turn into an x
            menu_click: ''
        }
    }

    //When the nav menu is openned, we set the background to have the dark tint, and set 
    //display of the about content to block, We set the about tab to have the yellow underline
    //by remving the 'underline' id on it. 

    //Adding underline id to a tab gives it ability to show the yellow line on hover, 
    //Removing the underlineid makes the yellow line permanent
    toggleNavMenu = () => {
        if (this.state.menudisplay == 'none') {
            this.setState({
                menudisplay: 'block',
                nav_background: 'rgba(0, 0, 0, 0.5)',
                about_display: 'block',
                about_id: '',
                service_id: 'underline',
                contact_id: 'underline',
                menu_click: 'click'
            })
        } else {
            this.setState({
                menudisplay: 'none',
                nav_background: 'rgba(0, 0, 0, 0)',
                menu_click: ''

            })
        }
    }

    //When we click on the open about tab, we set the display of the open about content to block
    //and set the display of all other tab contents to none, 
    //Then we set the id of the other tabs to underline to give them the hover feature 
    //and remove the id of the tab we clicked to give it the permanent underline
    openAboutTab = () => {
        this.setState({
            about_display: 'block',
            service_display: 'none',
            contact_display: 'none',
            about_id: '',
            service_id: 'underline',
            contact_id: 'underline'
        })
    }

    //When we click on the open service tab, we set the display of the service about content to block
    //and set the display of all other tabs contents to none, 
    //Then we set the id of the other tabs to underline to give them the hover feature 
    //and remove the id of the tab we clicked to give it the permanent underline
    openServiceTab = () => {
        this.setState({
            about_display: 'none',
            service_display: 'block',
            contact_display: 'none',
            about_id: 'underline',
            service_id: '',
            contact_id: 'underline'
        })
    }

    //When we click on the open contact tab, we set the display of the contact about content to block
    //and set the display of all other tabs contents to none, 
    //Then we set the id of the other tabs to underline to give them the hover feature 
    //and remove the id of the tab we clicked to give it the permanent underline
    openContactTab = () => {
        this.setState({
            about_display: 'none',
            service_display: 'none',
            contact_display: 'block',
            about_id: 'underline',
            service_id: 'underline',
            contact_id: ''
        })
    }


    navblurclicked = () => {
        this.toggleNavMenu()
    }

    render() {
        return (
            <div>
                <div className="nav">
                    <div className="logo-menu" onClick={this.toggleNavMenu}>
                        <svg id="the_svg_menu" className={this.state.menu_click} x="0px" y="0px" width="50px" height="44px" cx="50" cy="50" viewBox="0 -3 50 50">
                            <defs>
                            </defs>
                            <g>
                                <g className="lines">
                                    <line className="firstline" x1="17.1" y1="29.2" x2="40" y2="29.2" />
                                    <line className="lastline" x1="17.1" y1="14.2" x2="40" y2="14.2" />
                                    <line className="middleline" x1="17.1" y1="21.6" x2="40" y2="21.6" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>


                {/* {this.state.displaymenu && */}
                <div className="navigation">
                    <div className="navcontainer">
                        <div className="nav-menu-shelf"
                            style={{
                                display: this.state.menudisplay
                            }}
                        >
                            <img className="nav-logo-in-menu" src={logoInMenu}></img>
                            <div className="nav-tabscontainter">
                                <div className="nav-tab-button" id="nav-button-id">
                                    <div className="about_underline activeTab" id={this.state.about_id}></div>
                                    <a id="defaultOpen" onClick={this.openAboutTab}>About</a>
                                </div>
                                <div className="nav-tab-button" id="nav-button-id">
                                    <div className="service_underline activeTab" id={this.state.service_id}></div>
                                    <a onClick={this.openServiceTab}>Services</a>
                                </div>
                                <div className="nav-tab-button" id="nav-button-id">
                                    <div className="contact_underline activeTab" id={this.state.contact_id}></div>
                                    <a onClick={this.openContactTab}>Contact</a>
                                </div>
                            </div>
                            <div id="About" className="nav-tabcontent"
                                style={{
                                    display: this.state.about_display
                                }}

                            >

                                <div className="nav-menu-inner-div">
                                    <h4>Creative &#8226; Passionate &#8226; Clear</h4>
                                    <p> By day, I’m a content manager at Sun Studio London, a glass design company. By
                                    night/weekend, I’m a freelance graphic designer who loves helping charities and branding
                                    small startups.<br></br><br></br>
                                    With 3+years of content managing and 5years in graphic design, I have the right
                                    combination of content creation and design sense that enables me to create clean content
                                    that engages your audience and drives lead generation — and generally makes your life
                                    easier.
                                    With a focus on content creation and branding, I strive to create innovative solutions
                                    that are usable, progressive and refined in their delivery.
                                    <br></br>I am looking forward to working with you!
                                    <a target="_blank"
                                            href="https://drive.google.com/open?id=1KVvLcWsy3OQRTcrfFeCW_geto702n2of"><button
                                                className="button-text">VIEW RESUME</button></a>
                                    </p>
                                </div>
                            </div>

                            <div id="Services" className="nav-tabcontent"
                                style={{
                                    display: this.state.service_display
                                }}

                            >
                                <table className="nav-service-table">
                                    <tbody>
                                        <tr className="smallspaceUnder">
                                            <td><strong>WHAT I DO</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Content Creation</td>
                                            <td>Branding &amp; Logo</td>
                                        </tr>
                                        <tr>
                                            <td>Art Direction</td>
                                            <td>Video Editing</td>
                                        </tr>
                                        <tr>
                                            <td>Graphic Design</td>
                                            <td>Product Photography</td>
                                        </tr>
                                        <tr>
                                            <td>Project Managment</td>
                                            <td>Social Media Mgmt</td>
                                        </tr>
                                        <tr className="spaceUnder">
                                            <td>Photo Editing</td>
                                            <td>SEO&amp;Lead Generation</td>
                                        </tr>
                                        <tr className="smallspaceUnder">
                                            <td><strong>EXPERIENCE AND CLIENTS</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Whetstone Coaching</td>
                                            <td>Loyal to the Grind</td>
                                        </tr>
                                        <tr>
                                            <td>Who is Who Awards</td>
                                            <td>Camp Simcha</td>
                                        </tr>
                                        <tr>
                                            <td>Regenerate</td>
                                            <td>Melle J. Collection</td>
                                        </tr>
                                        <tr>
                                            <td>Copy Write Printers</td>
                                            <td>House of Levi Int'l</td>
                                        </tr>
                                        <tr>
                                            <td>Chettle Court Rangers F.C</td>
                                            <td>Tikum</td>
                                        </tr>
                                        <tr>
                                            <td>Uma Abu</td>
                                            <td>Beit Halochem</td>
                                        </tr>
                                        <tr>
                                            <td>Tan-Tan's Kitchen</td>
                                            <td>CCLCUK</td>
                                        </tr>
                                        <tr>
                                            <td>Tamerreign</td>
                                            <td>SUNSTUDIO .London</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="Contact" className="nav-tabcontent"
                                style={{
                                    display: this.state.contact_display
                                }}
                            >
                                <div className="contact-inner-div">
                                    <h4>Lets's Build Something Together</h4>
                                    <p className="contact-paragraph"> GET IN TOUCH <br /><br />

                                        <a href="mailto:wizmedia.design@gmail.com">wizmedia.design@gmail.com</a> <br />
                                        <a target="_blank" href="tel:+447562983370">+44 7562 983370</a> <br />
                                        <a target="_blank"
                                            href="https://www.google.com/maps/place/London/@51.6006643,-0.0998655,11.15z/data=!4m13!1m7!3m6!1s0x487604adb241a451:0x705aff44ee36f381!2sLondon!3b1!8m2!3d51.5115986!4d-0.1030089!3m4!1s0x487604adb241a451:0x705aff44ee36f381!8m2!3d51.5115986!4d-0.1030089">London,
                                    United Kingdom</a><br />

                                    </p>
                                </div>
                            </div>
                            <footer>
                                <ul className="social">
                                    <li></li>
                                    <a target="_blank" href="https://www.instagram.com/wiz_media">
                                        <li className="entypo-instagrem"></li>
                                    </a>
                                    <a target="_blank" href="https://dribbble.com/wiz_media">
                                        <li className="entypo-dribbble"></li>
                                    </a>
                                    <a href="#">
                                        <li className="entypo-window"></li>
                                    </a>
                                    <a target="_blank" href="https://www.behance.net/wiz_media">
                                        <li className="entypo-behance"></li>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/in/wisdom-abu-84672b48/">
                                        <li className="entypo-linkedin"></li>
                                    </a>
                                    <li></li>
                                </ul>
                            </footer>
                        </div>
                    </div>

                </div>
                <div
                    style={{
                        background: this.state.nav_background,
                        display: this.state.menudisplay,
                        zIndex: 9999
                    }}
                    onClick={this.navblurclicked}
                    className="nav-menu-background"></div>

            </div>
        );
    }
}

export default Nav;
