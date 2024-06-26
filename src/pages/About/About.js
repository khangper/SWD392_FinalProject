import React from "react";
import Header from "../../components/Header/Header";
import "./About.css";
import { Link } from "react-router-dom";
import { CiMobile1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { SlGlobe } from "react-icons/sl";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <div className="about-background-parent">
          <div className="about-background">
            <div className="about-about-links">
              <div className="about-link">
                <a href="/about-us" className="about-about1">
                  About
                </a>
              </div>
              <div className="about-other-links">
                <div className="about-other-link-items">
                  {/* <a href="/about-us" className="about-about1">
                  About
                </a> */}

                  <a href="/our-blog" className="about-blog">
                    Blog
                  </a>

                  <a href="/company-details" className="about-company">
                    Company
                  </a>
                  <a href="/career" className="about-careers">
                    Careers
                  </a>
                  <a href="/press" className="about-press">
                    Press
                  </a>
                </div>
              </div>
            </div>
            <div className="about-learning-heading">
              <h2 className="about-heading-21">
                Improving Lives Through Learning
              </h2>
            </div>
          </div>

          <div className="about-features-content-wrapper">
            <div className="about-features-content">
              <div className="about-features-wrapper">
                <div className="about-features-inner-wrapper">
                  <div className="about-heading-2-our-features">
                    <h2 className="about-heading-22">Our Features</h2>
                  </div>
                  <div className="about-on-cursus-parent">
                    <div className="about-on-cursus">
                      On Cursus, you have access to:
                    </div>
                    <div className="about-line-wrapper"></div>
                  </div>
                </div>
              </div>
              <div className="about-feature-list">
                <div className="about-feature-items">
                  <CiMobile1 className="about-feature-icons" />
                  <div className="about-feature-descriptions">
                    <div className="about-heading-4-wrapper">
                      <div className="about-heading-4">Mobile learning</div>
                    </div>
                    <div className="about-container">
                      <p className="about-content">
                        Quisque nec volutpat sem. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-feature-items">
                  <GoPeople className="about-feature-icons" />
                  <div className="about-feature-descriptions">
                    <div className="about-heading-4-wrapper">
                      <div className="about-heading-41">
                        Academic & Technical Support
                      </div>
                    </div>
                    <div className="about-container">
                      <p className="about-content">
                        Quisque nec volutpat sem. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-feature-items">
                  <LiaCertificateSolid className="about-feature-icons" />
                  <div className="about-feature-descriptions">
                    <div className="about-heading-4-wrapper">
                      <div className="about-heading-42">
                        Sharable Certificates
                      </div>
                    </div>
                    <div className="about-container">
                      <p className="about-content">
                        Quisque nec volutpat sem. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-feature-items">
                  <SlGlobe className="about-feature-icons" />
                  <div className="about-feature-descriptions">
                    <div className="about-heading-4-wrapper">
                      <div className="about-heading-43">
                        An Inclusive Experience
                      </div>
                    </div>
                    <div className="about-container">
                      <p className="about-content">
                        Quisque nec volutpat sem. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-our-story">
            <div className="about-story-content">
              <div className="about-story-wrapper">
                <div className="about-heading-2-our-story">
                  <h2 className="about-heading-23">Our Story</h2>
                  <div className="about-line-story"></div>
                </div>
                <div className="about-our-story-container">
                  <p className="about-our-story-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    consectetur vel dolor id ultrices. Proin a magna at mi
                    pretium pulvinar in eu enim. Nulla vel lacus lectus. Donec
                    at venenatis augue. Nam vitae purus placerat, hendrerit nisl
                    id, finibus magna. Etiam pharetra gravida ornare. Donec
                    sagittis, ipsum in egestas egestas, dui lorem sollicitudin
                    justo, ut ullamcorper velit neque eu velit. Ut et fringilla
                    elit. Mauris augue augue, auctor a blandit ac, convallis
                    eget neque. Curabitur in ante ante. Nullam laoreet tempus
                    erat at ornare. In nisl nisi, dapibus eget facilisis sit
                    amet, commodo quis nibh.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/about/stroy_img.png"
              alt=""
              className="about-story-img"
            />
          </div>

          <div className="about-features-content-wrapper-our-global">
            <div className="about-features-content">
              <div className="about-features-wrapper">
                <div className="about-features-inner-wrapper">
                  <div className="about-heading-2-our-features">
                    <h2 className="about-heading-22">Our Global Reach</h2>
                  </div>
                  <div className="about-on-cursus-parent">
                    <div className="about-on-cursus">
                      Cursus is the leading global marketplace for teaching and
                      learning, connecting millions of students to the skills
                      they need to succeed.
                    </div>
                    <div className="about-line-wrapper"></div>
                  </div>
                </div>
              </div>
              <div className="about-feature-list-our-global">
                <div className="about-feature-items-our-global">
                  <div className="about-feature-descriptions-our-global">
                    <div className="about-heading-5-wrapper-our-global">
                      <h1 className="about-heading-5">25K</h1>
                    </div>
                    <div className="about-container-our-global">
                      <p className="about-content-our-global">Instructors</p>
                    </div>
                  </div>
                </div>

                <div className="about-feature-items-our-global">
                  <div className="about-feature-descriptions-our-global">
                    <div className="about-heading-5-wrapper-our-global">
                      <h1 className="about-heading-5">95K</h1>
                    </div>
                    <div className="about-container-our-global">
                      <p className="about-content-our-global">Course</p>
                    </div>
                  </div>
                </div>

                <div className="about-feature-items-our-global">
                  <div className="about-feature-descriptions-our-global">
                    <div className="about-heading-5-wrapper-our-global">
                      <h1 className="about-heading-5">40M</h1>
                    </div>
                    <div className="about-container-our-global">
                      <p className="about-content-our-global">
                        Course enrollments
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-feature-items-our-global">
                  <div className="about-feature-descriptions-our-global">
                    <div className="about-heading-5-wrapper-our-global">
                      <h1 className="about-heading-5">50+</h1>
                    </div>
                    <div className="about-container-our-global">
                      <p className="about-content-our-global">Languages</p>
                    </div>
                  </div>
                </div>

                <div className="about-feature-items-our-global">
                  <div className="about-feature-descriptions-our-global">
                    <div className="about-heading-5-wrapper-our-global">
                      <h1 className="about-heading-5">595+</h1>
                    </div>
                    <div className="about-container-our-global">
                      <p className="about-content-our-global">
                        Membership Partner
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-feature-items-our-global">
                  <div className="about-feature-descriptions-our-global">
                    <div className="about-heading-5-wrapper-our-global">
                      <h1 className="about-heading-5">295</h1>
                    </div>
                    <div className="about-container-our-global">
                      <p className="about-content-our-global">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-meet-our-team">
            <div className="about-team-content">
              <div className="about-team-wrapper">
                <div className="about-heading-6-wrapper">
                  <h2 className="about-heading-6">Meet Our Team</h2>
                </div>
                <div className="about-meet-parent">
                  <div className="about-meet-container">
                    <p className="about-meet-content">
                      A perfect blend of creativity and technical wizardry. The
                      best people formula for great websites!
                    </p>
                  </div>
                  <div className="about-line-wrappers"></div>
                </div>
              </div>
            </div>
            <div className="about-team-call-to-action-parent">
              <div className="about-team-call-to-action">
                <div className="about-team-call-container">
                  <p className="about-team-call-content">
                    Morbi eget elit eget turpis varius mollis eget vel massa.
                    Donec porttitor, sapien eget commodo vulputate, erat felis
                    aliquam dolor, non condimentum libero dolor vel ipsum. Sed
                    porttitor nisi eget nulla ullamcorper eleifend. Fusce
                    tristique sapien nisi, vel feugiat neque luctus sit amet.
                    Quisque consequat quis turpis in mattis. Maecenas eget
                    mollis nisl. Cras porta dapibus est, quis malesuada ex
                    iaculis at. Vestibulum egestas tortor in urna tempor, in
                    fermentum lectus bibendum. In leo leo, bibendum at pharetra
                    at, tincidunt in nulla. In vel malesuada nulla, sed
                    tincidunt neque. Phasellus at massa vel sem aliquet sodales
                    non in magna. Ut tempus ipsum sagittis neque cursus euismod.
                    Vivamus luctus elementum tortor, ac aliquet dolor vehicula
                    et.
                  </p>
                </div>
            
                <button className="about-button-join-our-team">
                  Join Our Team
                </button>
                
              </div>
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/about/team.jpg"
                alt=""
                className="about-team-img"
              />
            </div>
          </div>

        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default About;
