import React, { useEffect } from "react";
import "./Previews.css";
import star from "../../assets/star.png";
import ratingStar from "../../assets/rating.png";
import search from "../../assets/search.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewRequest } from "../../redux/reduxActions/reviewActions/reviewAction";
import moment from "moment";

const Previews = () => {

  const dispatch = useDispatch();
  const { review } = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(fetchReviewRequest());
  }, [dispatch]);
  return (
    <div>
      <div className="tab-pane fade active show">
        <div className="student_reviews">
          <div className="courses_detail_view-row">
            <div className="cdv-col-lg-5">
              <div className="reviews_left">
                <h3>Student Feedback</h3>
                <div className="total_rating">
                  <div className="_rate001">4.0</div>
                  <div className="p-rating-box">
                    <img src={star} className="cdv-rate-star" />
                    <img src={star} className="cdv-rate-star" />
                    <img src={star} className="cdv-rate-star" />
                    <img src={star} className="cdv-rate-star" />
                    <img className="p-star" src={ratingStar}></img>
                  </div>
                  <div className="p-rate002">Course Rating</div>
                </div>
                <div className="_rate003">
                  <div className="_rate004">
                    <div className="p-progress">
                      <div className="p-progress-bar"></div>
                    </div>
                    <div className="p-rating-box">
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                    </div>
                    <div className="p-rate002">100%</div>
                  </div>
                  <div className="_rate004">
                    <div className="p-progress">
                      <div className="p-progress-bar1"></div>
                    </div>
                    <div className="p-rating-box">
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img className="p-star" src={ratingStar}></img>
                    </div>
                    <div className="p-rate002">80%</div>
                  </div>
                  <div className="_rate004">
                    <div className="p-progress">
                      <div className="p-progress-bar2"></div>
                    </div>
                    <div className="p-rating-box">
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img className="p-star" src={ratingStar}></img>
                      <img className="p-star" src={ratingStar}></img>
                    </div>
                    <div className="p-rate002">60%</div>
                  </div>
                  <div className="_rate004">
                    <div className="p-progress">
                      <div className="p-progress-bar3"></div>
                    </div>
                    <div className="p-rating-box">
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img className="p-star" src={ratingStar}></img>
                      <img className="p-star" src={ratingStar}></img>
                      <img className="p-star" src={ratingStar}></img>
                    </div>
                    <div className="p-rate002">40%</div>
                  </div>
                  <div className="_rate004">
                    <div className="p-progress">
                      <div className="p-progress-bar4"></div>
                    </div>
                    <div className="p-rating-box">
                      <img src={star} className="cdv-rate-star" />
                      <img className="p-star" src={ratingStar}></img>
                      <img className="p-star" src={ratingStar}></img>
                      <img className="p-star" src={ratingStar}></img>
                      <img className="p-star" src={ratingStar}></img>
                    </div>
                    <div className="p-rate002">20%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cdv-col-lg-7">
              <div className="review_right">
                <div className="review_right_heading">
                  <h3>Reviews</h3>
                  <div className="review_search">
                    <input
                      className="rv_srch"
                      type="text"
                      placeholder="Search reviews..."
                    />
                    <button className="rvsrch_btn">
                      <img src={search} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="review_all120">
                {review.map((review) => (
                  <div className="review_item" key={review.id}>
                    <div className="review_usr_dt">
                      <div className="oiv-img160">
                        <img
                          src={review.avatar}
                          alt=""
                        />
                      </div>
                      <div className="oiv-cmnt_name">
                        <h4 className="oiv-tutor_name">{review.name}</h4>
                        <span className="oiv-cmnt_time">{moment(review.createdAt).fromNow()}</span>
                      </div>
                    </div>
                    <div className="p-rating-box ">
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img src={star} className="cdv-rate-star" />
                      <img className="p-star" src={ratingStar}></img>
                    </div>
                    <p className="cdv-cmnt_text_message">
                      {review.content}
                    </p>
                    <div className="cdv-check-helpful">
                      <span>Was this review helpful?</span>
                      <div className="radio--group-inline-container">
                        <div className="radio-item">
                          <input id="radio-1" name="radio" type="radio" />
                          <label htmlFor="radio-1" className="radio-label">
                            Yes
                          </label>
                        </div>
                        <div className="radio-item">
                          <input id="radio-2" name="radio" type="radio" />
                          <label htmlFor="radio-2" className="radio-label">
                            No
                          </label>
                        </div>
                      </div>
                      <a href="#" className="report145">
                        Report
                      </a>
                    </div>
                  </div>
                ))}

                
                <div className="review_item">
                  <a href="#" className="more_reviews">
                    See More Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previews;
