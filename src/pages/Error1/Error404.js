import React from 'react'
import './Error404.css'
import { Link } from 'react-router-dom'
import { PATH_NAME } from '../../constant/pathname'
import hakaFull_logo from "../../assets/Haka_Online_Learning_System_logo.png"

export const Error404 = () => {
    return (
        <div className="wrapper error_wrapper">
            <div className="error_container">
                <div className="error_row">
                    <div className="col-md-12">
                        <div className="cmtk_group">
                            <div className="ct-logo">
                                <Link to={PATH_NAME.LOGIN}><img src={hakaFull_logo} alt="" /></Link>
                            </div>
                            <div className="cmtk_dt">
                                <h1 className="thnk_coming_title">404</h1>
                                <h4 className="thnk_title1">The page you were looking for could not be found.</h4>
                                <a className="home_btn_container">
                                    <Link to="/home">
                                        <button className='home_btn_content'>
                                            Go to Homepage
                                        </button>
                                    </Link>

                                </a>
                            </div>
                            <div className="tc_footer_main">
                                <div className="tc_footer_left">
                                    <ul>
                                        <li><a href="about_us.html">About</a></li>
                                        <li><a href="press.html">Press</a></li>
                                        <li><a href="contact_us.html">Contact Us</a></li>
                                        <li><a href="coming_soon.html">Advertise</a></li>
                                        <li><a href="coming_soon.html">Developers</a></li>
                                        <li><a href="terms_of_use.html">Copyright</a></li>
                                        <li><a href="terms_of_use.html">Privacy Policy</a></li>
                                        <li><a href="terms_of_use.html">Terms</a></li>
                                    </ul>
                                </div>
                                <div className="tc_footer_right">
                                    <p>© 2024 <strong>Cursus</strong>. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Error404;