import React, { useState } from "react";
import "./ApplyJob.css";
import Header from "../../components/Header/Header";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdCloudUpload } from "react-icons/md";
import Footer from "../../components/Footer/Footer";

const ApplyJob = () => {
  return (
    <div className="apply-job">
      <Header />
      <main className="apply-job-parent">
        <div className="apply-job-wrapper">
          <div className="apply-job-breadcrumb-content">
            <div className="apply-job-breadcrumb-title">
              <div className="apply-job-breadcrumb-list">
                <a href="/home" className="apply-job-home">
                  Home
                </a>
                <div className="apply-job-breadcrumb-items">/</div>
                <a href="/career" className="apply-job-career">
                  Career
                </a>
                <div className="apply-job-breadcrumb-items-1">/</div>
                <div className="apply-job-data-engineer">Data Engineer</div>
              </div>
              <h3 className="apply-job-heading-1">Data Engineer</h3>
            </div>
            <div className="apply-job-back-to-career-link">
              <MdKeyboardDoubleArrowLeft className="apply-job-icon" />
              <a href="/career" className="apply-job-back-to-career">
                Back to Career
              </a>
            </div>
          </div>

          <div className="apply-job-application">
            <div className="apply-job-application-parent">
              <div className="apply-job-horizontal-border-wrapper">
                <div className="apply-job-horizontal-border">
                  <button className="apply-job-apply-for-button">
                    Apply For This Job
                  </button>
                </div>
              </div>

              <div className="apply-job-description">
                <div className="apply-job-content-container">
                  <p className="apply-job-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur volutpat maximus pellentesque. Integer sem enim,
                    luctus at nibh at, condimentum sagittis sapien. Sed tempus
                    ipsum erat, sit amet efficitur velit interdum eu. Vestibulum
                    hendrerit id dolor eu scelerisque. Phasellus ex dui,
                    consequat nec feugiat eu, dapibus eget ante. Sed sodales
                    interdum dui, at euismod mi feugiat hendrerit. Suspendisse
                    auctor libero in tempor mollis. Nulla et dolor velit.
                    Aliquam sit amet luctus quam.
                  </p>
                </div>

                <div className="apply-job-heading-41">What you'll be doing</div>

                <div className="apply-job-content-container">
                  <p className="apply-job-content">
                    Nam a egestas libero, eget eleifend turpis. Sed id ipsum a
                    ipsum aliquam laoreet sit amet sit amet nibh. Proin dapibus,
                    libero sed posuere rhoncus, orci mi cursus enim, at accumsan
                    eros massa lacinia mi. Nunc eget finibus felis, volutpat
                    malesuada sem. Aliquam ac nisl pellentesque, varius neque
                    sit amet, porttitor nunc. Nullam elit tellus, dapibus non
                    eleifend sed, hendrerit eget velit. Aliquam ut felis dictum,
                    tincidunt magna vitae, aliquam massa. In porttitor tristique
                    quam, non dignissim sapien pharetra ultrices. Cras non ante
                    non velit mollis mollis. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Quisque et bibendum urna, eget consequat sapien.
                    Integer sed condimentum nibh. Integer id neque tristique,
                    lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor
                    ac rutrum eget, volutpat a velit. Curabitur et enim quis
                    diam congue dictum et vitae dui. Nulla tortor orci, luctus a
                    pretium vel, ultrices porta nisl.
                  </p>
                </div>

                <div className="apply-job-content-container">
                  <p className="apply-job-content">
                    Etiam lobortis dictum tincidunt. Interdum et malesuada fames
                    ac ante ipsum primis in faucibus. Suspendisse ultricies
                    efficitur dui, suscipit tempus elit condimentum quis. Duis
                    sed vestibulum tortor, eget cursus odio.
                  </p>
                </div>

                <div className="apply-job-heading-41">
                  What we're looking for
                </div>

                <div className="apply-job-content-container-1">
                  <p className="apply-job-content-1">
                    1. Work closely with other data engineers to enhance
                    infrastructure, improve reliability, and strengthen database
                    performance
                  </p>
                  <p className="apply-job-content-1">
                    2. Collaborate with data scientists, product managers,
                    marketers and other data-driven internal stakeholders to
                    identify opportunities for better data access and usage
                  </p>
                  <p className="apply-job-content-1">
                    3. Contribute to the ongoing development of the data
                    warehouse ecosystem
                  </p>
                  <p className="apply-job-content-1">
                    4. Become the expert on all aspects of Edututs+'s data
                    reporting and analytics infrastructure
                  </p>
                  <p className="apply-job-content-1">
                    5. Develop and maintain data definitions for internally
                    available data sources
                  </p>
                </div>

                <div className="apply-job-heading-41">Who should apply?</div>

                <div className="apply-job-content-container">
                  <p className="apply-job-content">
                    Quisque et bibendum urna, eget consequat sapien. Integer sed
                    condimentum nibh. Integer id neque tristique, lobortis massa
                    ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum
                    eget, volutpat a velit. Curabitur et enim quis diam congue
                    dictum et vitae dui. Nulla tortor orci, luctus a pretium
                    vel, ultrices porta nisl.
                  </p>
                </div>

                <div className="apply-job-heading-41">What next?</div>

                <div className="apply-job-content-container">
                  <p className="apply-job-content">
                    Quisque et bibendum urna, eget consequat sapien. Integer sed
                    condimentum nibh. Integer id neque tristique, lobortis massa
                    ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum
                    eget, volutpat a velit. Curabitur et enim quis diam congue
                    dictum et vitae dui. Nulla tortor orci, luctus a pretium
                    vel, ultrices porta nisl.
                  </p>
                </div>
              </div>

              <div className="apply-job-submit-application">
                <div className="apply-job-heading-41">
                  Submit Your Application
                </div>
                <div className="apply-job-form">
                  <div className="apply-job-border-form">
                    <input
                      type="text"
                      placeholder="Full Name"
                      id="fullname"
                      name="fullname"
                    />
                  </div>
                  <div className="apply-job-border-form">
                    <input
                      type="email"
                      placeholder="Email Adress"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="apply-job-border-form">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      id="phonenumber"
                      name="phonenumber"
                    />
                  </div>
                  <div className="apply-job-border-form">
                    <select name="gender" defaultValue="">
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="apply-job-heading-42">Resume/CV*</div>
                <div className="apply-job-cv-form">
                  <input
                    type="file"
                    name="resume"
                    accept="application/pdf"
                    placeholder="Attach Resume/CV"
                  />
                  <div className="apply-job-drap-text">
                    <MdCloudUpload className="apply-job-icon-upload" />
                    <h4>Attach Resume/CV</h4>
                  </div>
                </div>
              </div>

              <div className="apply-job-links">
                <div className="apply-job-heading-41">Links</div>
                <div className="apply-job-form">
                  <div className="apply-job-border-form">
                    <input
                      type="url"
                      placeholder="LinkedIn URL"
                      id="linkedin"
                      name="linkedin"
                    />
                  </div>
                  <div className="apply-job-border-form">
                    <input
                      type="url"
                      placeholder="Twitter URL"
                      id="twitter"
                      name="twitter"
                    />
                  </div>
                  <div className="apply-job-border-form">
                    <input
                      type="url"
                      placeholder="Postfolio URL"
                      id="postfolio"
                      name="postfolio"
                    />
                  </div>
                  <div className="apply-job-border-form">
                    <input
                      type="url"
                      placeholder="Other Website URL"
                      id="otherweb"
                      name="otherweb"
                    />
                  </div>
                </div>
              </div>

              <div className="apply-job-additional-infor">
                <div className="apply-job-heading-41">Links</div>
                <div className="apply-job-border-form">
                  <textarea
                    name="infor"
                    id="infor"
                    placeholder="Add a cover letter or anything else you want to share"
                    rows={30}
                    cols={10}
                  ></textarea>
                </div>

                <button className="apply-job-submit-button" type="submit">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default ApplyJob;
