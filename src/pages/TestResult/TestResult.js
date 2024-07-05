import React from 'react'
import './TestResult.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const TestResult = () => {
    return (
        <div>
            <Header />
            <div className="certification_test">
                <div className="certification_test-header">
                    <div className="certification_test-container">
                        <div className="certification_test-row">
                            <div className="certification_test-col-lg-12">
                                <div className="ct-title125">
                                    <div className="ct-titleleft">
                                        <div className="ct-ttl121">
                                            <div>
                                                <div className="ct-breadcrumb">
                                                    <p className="breadcrumb-item"><a href="index.html">Home</a></p>
                                                    <p className="breadcrumb-item"><a href="certification_center.html">Certification Center</a></p>
                                                    <p className="breadcrumb-item active" aria-current="page"><a href="certification_center.html">Result</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ct-titleright">
                                        <a href="certification_center.html" className="blog_link"><i className="uil uil-angle-double-left"></i>  Back to Certification Center</a>
                                    </div>
                                </div>
                                <div className="ct-title126">
                                    <h2>Result</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="test_result-row">
                    <div className="test_result-col-md-6">
                        <div className="test_result-certi_form">
                            <div className="test_result-bg">
                                <div className="test_result-left">
                                    <div className='ts-box-icon'>
                                        <div className="result_dt">
                                            <div className='ts-tick-container'>
                                                <div className='ts-tick_icon'></div>
                                            </div>
                                            <p>Right<span>(15)</span></p>
                                        </div>
                                    </div>
                                    <div className='ts-box-icon'>
                                        <div className="result_dt">
                                            <div className='ct-cross-container'>
                                                <div className='ct-cross_icon'></div>
                                            </div>
                                            <p>Wrong<span>(5)</span></p>
                                        </div>
                                    </div>
                                    <div className='ts-box-icon'>
                                        <div className="result_dt">
                                            <div className='ts-number-container'>
                                                <h4>15</h4>
                                            </div>
                                            <p>Out of 20</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="test_result-content">
                                    <h2>Congratulation! Joginder</h2>
                                    <p>You are eligible for this certificate</p>
                                    <a href="http://gambolthemes.net/html-imgs/certificate.jpg" className="ts-download" download="w3logo" target="_blank">Download Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>

        </div >
    )
}

export default TestResult