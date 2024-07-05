import React from 'react'
import './Previews.css'
import star from "../../assets/star.png";
import ratingStar from "../../assets/rating.png"
import search from "../../assets/search.png";

const Previews = () => {
    return (
        <div>
            <div className="tab-pane fade active show" >
                <div className="student_reviews">
                    <div className="courses_detail_view-row">
                        <div className="cdv-col-lg-5">
                            <div className="reviews_left">
                                <h3>Student Feedback</h3>
                                <div className="total_rating">
                                    <div className="_rate001">4.6</div>
                                    <div className="p-rating-box">
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img className='p-star' src={ratingStar}></img>
                                    </div>
                                    <div className="p-rate002">Course Rating</div>
                                </div>
                                <div className="_rate003">
                                    <div className="_rate004">
                                        <div className="p-progress">
                                            <div className="progress-bar w-70"></div>
                                        </div>
                                        <div className="p-rating-box">
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                        </div>
                                        <div className="p-rate002">70%</div>
                                    </div>
                                    <div className="_rate004">
                                        <div className="p-progress">
                                            <div className="progress-bar w-30"></div>
                                        </div>
                                        <div className="p-rating-box">
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img className='p-star' src={ratingStar}></img>
                                        </div>
                                        <div className="p-rate002">40%</div>
                                    </div>
                                    <div className="_rate004">
                                        <div className="p-progress">
                                            <div className="progress-bar w-5"></div>
                                        </div>
                                        <div className="p-rating-box">
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img className='p-star' src={ratingStar}></img>
                                            <img className='p-star' src={ratingStar}></img>
                                        </div>
                                        <div className="p-rate002">5%</div>
                                    </div>
                                    <div className="_rate004">
                                        <div className="p-progress">
                                            <div className="progress-bar w-2"></div>
                                        </div>
                                        <div className="p-rating-box">
                                            <img src={star} className='cdv-rate-star' />
                                            <img src={star} className='cdv-rate-star' />
                                            <img className='p-star' src={ratingStar}></img>
                                            <img className='p-star' src={ratingStar}></img>
                                            <img className='p-star' src={ratingStar}></img>
                                        </div>
                                        <div className="p-rate002">1%</div>
                                    </div>
                                    <div className="_rate004">
                                        <div className="p-progress">
                                            <div className="progress-bar w-1"></div>
                                        </div>
                                        <div className="p-rating-box">
                                            <img src={star} className='cdv-rate-star' />
                                            <img className='p-star' src={ratingStar}></img>
                                            <img className='p-star' src={ratingStar}></img>
                                            <img className='p-star' src={ratingStar}></img>
                                            <img className='p-star' src={ratingStar}></img>
                                        </div>
                                        <div className="p-rate002">1%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cdv-col-lg-7">
                            <div className="review_right">
                                <div className="review_right_heading">
                                    <h3>Reviews</h3>
                                    <div className="review_search">
                                        <input className="rv_srch" type="text" placeholder="Search reviews..." />
                                        <button className="rvsrch_btn"><img src={search} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="review_all120">
                                <div className="review_item">
                                    <div className="review_usr_dt">
                                        <div className="oiv-img160">
                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                        </div>
                                        <div className="oiv-cmnt_name">
                                            <h4 className="oiv-tutor_name">John Doe</h4>
                                            <span className="oiv-cmnt_time">2 hour ago</span>
                                        </div>
                                    </div>
                                    <div className="p-rating-box ">
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img className='p-star' src={ratingStar}></img>
                                    </div>
                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                    <div className="cdv-check-helpful">
                                        <span>Was this review helpful?</span>
                                        <div className="radio--group-inline-container">
                                            <div className="radio-item">
                                                <input id="radio-1" name="radio" type="radio" />
                                                <label htmlFor="radio-1" className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio-item">
                                                <input id="radio-2" name="radio" type="radio" />
                                                <label htmlFor="radio-2" className="radio-label">No</label>
                                            </div>
                                        </div>
                                        <a href="#" className="report145">Report</a>
                                    </div>
                                </div>
                                <div className="review_item">
                                    <div className="review_usr_dt">
                                        <div className="oiv-img160">
                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                        </div>
                                        <div className="oiv-cmnt_name">
                                            <h4 className="oiv-tutor_name">John Doe</h4>
                                            <span className="oiv-cmnt_time">2 hour ago</span>
                                        </div>
                                    </div>
                                    <div className="p-rating-box ">
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img className='p-star' src={ratingStar}></img>
                                    </div>
                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                    <div className="cdv-check-helpful">
                                        <span>Was this review helpful?</span>
                                        <div className="radio--group-inline-container">
                                            <div className="radio-item">
                                                <input id="radio-1" name="radio" type="radio" />
                                                <label htmlFor="radio-1" className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio-item">
                                                <input id="radio-2" name="radio" type="radio" />
                                                <label htmlFor="radio-2" className="radio-label">No</label>
                                            </div>
                                        </div>
                                        <a href="#" className="report145">Report</a>
                                    </div>
                                </div>
                                <div className="review_item">
                                    <div className="review_usr_dt">
                                        <div className="oiv-img160">
                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                        </div>
                                        <div className="oiv-cmnt_name">
                                            <h4 className="oiv-tutor_name">John Doe</h4>
                                            <span className="oiv-cmnt_time">2 hour ago</span>
                                        </div>
                                    </div>
                                    <div className="p-rating-box ">
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img className='p-star' src={ratingStar}></img>
                                    </div>
                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                    <div className="cdv-check-helpful">
                                        <span>Was this review helpful?</span>
                                        <div className="radio--group-inline-container">
                                            <div className="radio-item">
                                                <input id="radio-1" name="radio" type="radio" />
                                                <label htmlFor="radio-1" className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio-item">
                                                <input id="radio-2" name="radio" type="radio" />
                                                <label htmlFor="radio-2" className="radio-label">No</label>
                                            </div>
                                        </div>
                                        <a href="#" className="report145">Report</a>
                                    </div>
                                </div>
                                <div className="review_item">
                                    <div className="review_usr_dt">
                                        <div className="oiv-img160">
                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                        </div>
                                        <div className="oiv-cmnt_name">
                                            <h4 className="oiv-tutor_name">John Doe</h4>
                                            <span className="oiv-cmnt_time">2 hour ago</span>
                                        </div>
                                    </div>
                                    <div className="p-rating-box ">
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img className='p-star' src={ratingStar}></img>
                                    </div>
                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                    <div className="cdv-check-helpful">
                                        <span>Was this review helpful?</span>
                                        <div className="radio--group-inline-container">
                                            <div className="radio-item">
                                                <input id="radio-1" name="radio" type="radio" />
                                                <label htmlFor="radio-1" className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio-item">
                                                <input id="radio-2" name="radio" type="radio" />
                                                <label htmlFor="radio-2" className="radio-label">No</label>
                                            </div>
                                        </div>
                                        <a href="#" className="report145">Report</a>
                                    </div>
                                </div>
                                <div className="review_item">
                                    <div className="review_usr_dt">
                                        <div className="oiv-img160">
                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                        </div>
                                        <div className="oiv-cmnt_name">
                                            <h4 className="oiv-tutor_name">John Doe</h4>
                                            <span className="oiv-cmnt_time">2 hour ago</span>
                                        </div>
                                    </div>
                                    <div className="p-rating-box ">
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img src={star} className='cdv-rate-star' />
                                        <img className='p-star' src={ratingStar}></img>
                                    </div>
                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                    <div className="cdv-check-helpful">
                                        <span>Was this review helpful?</span>
                                        <div className="radio--group-inline-container">
                                            <div className="radio-item">
                                                <input id="radio-1" name="radio" type="radio" />
                                                <label htmlFor="radio-1" className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio-item">
                                                <input id="radio-2" name="radio" type="radio" />
                                                <label htmlFor="radio-2" className="radio-label">No</label>
                                            </div>
                                        </div>
                                        <a href="#" className="report145">Report</a>
                                    </div>
                                </div>
                                <div className="review_item">
                                    <a href="#" className="more_reviews">See More Reviews</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Previews