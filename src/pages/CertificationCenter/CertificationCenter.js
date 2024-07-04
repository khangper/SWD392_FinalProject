import React, { useState } from 'react'
import './/CertificationCenter.css'
import Header from '../../components/Header-paidmember/Header'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


function CertificationCenter() {

  const [activeTab, setActiveTab] = useState('development'); // State để lưu tab đang được chọn

    const handleTabClick = (tabId) => {
        setActiveTab(tabId); // Cập nhật state khi người dùng chọn tab
    };
  return (
    <div className="CertificationCenterPage">
      <Header/>

      <div className="CC_215certibg">
             <div className="CC-grid-container">						
						      <div className="CC-cert_banner_text CC-grid-item">						
							 <h1>Certification Center</h1>
							 <p>For Students and Instructors</p>
							 <ul className="CC-certi_icons">
								<li><a href="#" className="CC-edttslogo"><img src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg" alt=""/></a></li>
								<li><div className="CC-edttsplus"><img src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/plus.svg" alt=""/></div></li>
								<li><a href="#" className="CC-edttslogo1"><img src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/certicon.svg" alt=""/></a></li>
							 </ul>
							 <Link to="/certificationfillform">
               <button className="CC-certi-btn">Start Certification</button>
               </Link>
						       </div>
					    </div>

      </div>

      <div className="CC_215xd5">
            <div className="CC-grid-container">
							<div className="CC-title889">
								<h2>Find Certificate</h2>
							</div>												
						</div>


            <div className="CC1-grid-container">
    <div className="CC1-grid-item">
        <div className="ui search focus">
            <div className="ui left icon input swdh11 swdh19">
                <input className="prompt srch_explore" type="text" name="cerificate[number]"  placeholder="# Number"/>
            </div>
        </div>
    </div>
    <div className="CC1-grid-item">
        <div className="ui search focus">
            <div className="ui left icon input swdh11 swdh19">
                <input className="prompt srch_explore" type="text" name="fullname" placeholder="Full Name"/>
            </div>
        </div>
    </div>
    <div className="CC1-grid-item">
      <div className="ui search focus">
      <select className="ui hj145 dropdown cntry152 prompt srch_explore">
            <option value="">Select Category</option>
            <option value="1">Development</option>
            <option value="2">Finance & Accounting</option>
            <option value="3">Design</option>
            <option value="4">Marketing</option>
            <option value="5">Teaching & Academics</option>
        </select>
      </div>

    </div>
    <div className="CC1-grid-item">
      <div className="ui search focus">
      <button className="CC-login-btn" type="submit">Find Certificate</button>
      </div>
        
    </div>
            </div>


      

      </div>


      <div className="CC_215xd5">
             <div className="CC-grid-container">           
						<div className="CC-title589 ">
							<h2>Our Certification</h2>
							<p>We prepared tests for the most popular categories and get cerificate</p>
						</div>
					   </div>

             <div className="CC-grid-container">
           <div className="CC-container">
            <ul className="CC-tabs">
                <li className={activeTab === 'development' ? 'active' : ''} onClick={() => handleTabClick('development')}>
                    Development
                </li>
                <li className={activeTab === 'accounting' ? 'active' : ''} onClick={() => handleTabClick('accounting')}>
                    Finance & Accounting
                </li>
                <li className={activeTab === 'design' ? 'active' : ''} onClick={() => handleTabClick('design')}>
                    Design
                </li>
                <li className={activeTab === 'marketing' ? 'active' : ''} onClick={() => handleTabClick('marketing')}>
                    Marketing
                </li>
                <li className={activeTab === 'teaching' ? 'active' : ''} onClick={() => handleTabClick('teaching')}>
                    Teaching & Academics
                </li>
            </ul>
            <div className="tab-content">
              <div className="CC-grid-container">
              {activeTab === 'development' && 
                  <div  className="CC-development">
                <div className="CC-certificates">
  <div className="CC3-grid-container">
    <a href="#" className="CC-certilink__152">WordPress</a>
    <a href="#" className="CC-certilink__152">HTML CSS</a>
    <a href="#" className="CC-certilink__152">MotoCMS 3</a>
    <a href="#" className="CC-certilink__152">Joomla</a>
    <a href="#" className="CC-certilink__152">OpenCart</a>
    <a href="#" className="CC-certilink__152">Joomla Pro</a>
    <a href="#" className="CC-certilink__152">WordPress Pro</a>
    <a href="#" className="CC-certilink__152">WordPress Elementor</a>
    <a href="#" className="CC-certilink__152">WordPress Elementor Pro</a>
    <a href="#" className="CC-certilink__152">PrestaShop</a>
  </div>
                </div>

                  
                  </div>}
                {activeTab === 'accounting' && 
                    <div className="accounting">
                <div className="CC-certificates">
  <div className="CC3-grid-container">
    <a href="#" className="CC-certilink__152">Accounting</a>
    <a href="#" className="CC-certilink__152">Finance Fundamentabls</a>
    <a href="#" className="CC-certilink__152">Bookkeeping</a>
    <a href="#" className="CC-certilink__152">Political Science</a>
    <a href="#" className="CC-certilink__152">Finace</a>
    <a href="#" className="CC-certilink__152">Cryptocurrency</a>

  </div>
                </div>
                  </div>}
                {activeTab === 'design' && 
                <div className="design">
                                  <div className="CC-certificates">
  <div className="CC3-grid-container">
    <a href="#" className="CC-certilink__152">Adobe Photoshop</a>
    <a href="#" className="CC-certilink__152">Adobe Illustrator</a>
    <a href="#" className="CC-certilink__152">Adobe After Efftects</a>
    <a href="#" className="CC-certilink__152">Adobe InDesign</a>
    <a href="#" className="CC-certilink__152">Unity</a>
    <a href="#" className="CC-certilink__152">Drawing</a>
    <a href="#" className="CC-certilink__152">Game Development Fundamentals</a>
    <a href="#" className="CC-certilink__152">3D Modeling</a>
    <a href="#" className="CC-certilink__152">Motion Graphics</a>
    <a href="#" className="CC-certilink__152">2D Animation</a>
    <a href="#" className="CC-certilink__152">T-Shirt Design</a>



  </div>
                </div>
                </div>}
                {activeTab === 'marketing' && 
                <div>
    <div className="CC-certificates">
      <div className="CC3-grid-container">
         <a href="#" className="CC-certilink__152">Googgle Ads (Adwords)</a>
         <a href="#" className="CC-certilink__152">Google Ads (Adwords) Certification</a>
         <a href="#" className="CC-certilink__152">Socical Marketing</a>
         <a href="#" className="CC-certilink__152">Email Marketing</a>
         <a href="#" className="CC-certilink__152">Business Strategy</a>
         <a href="#" className="CC-certilink__152">SEO</a>
        <a href="#" className="CC-certilink__152">PPC Advertising</a>
        <a href="#" className="CC-certilink__152">Blogging</a>
      </div>
     </div>
                  </div>}
                {activeTab === 'teaching' && <div>
                  <div className="CC-certificates">
      <div className="CC3-grid-container">
         <a href="#" className="CC-certilink__152">Math</a>
         <a href="#" className="CC-certilink__152">Humanities</a>
         <a href="#" className="CC-certilink__152">Engineering</a>
         <a href="#" className="CC-certilink__152">Science</a>
         <a href="#" className="CC-certilink__152">Social Science</a>
         <a href="#" className="CC-certilink__152">English Language</a>
        <a href="#" className="CC-certilink__152">German Language</a>
        <a href="#" className="CC-certilink__152">Sign Language</a>
        <a href="#" className="CC-certilink__152">IELTS</a>
        <a href="#" className="CC-certilink__152">French Language</a>
        <a href="#" className="CC-certilink__152">Spanish Language</a>
        <a href="#" className="CC-certilink__152">English Language</a>

      </div>
     </div>
                  
                  
                  
                  </div>}

              </div>
               
            </div>
        </div>

             </div>
      </div>


       <div className="CC_485td5">
        <div className="CC-grid-container">
						<div className="CC-titleceti89">
							<h2>Who Can Get Benefit From This?</h2>
						</div>
        </div>
        <div className="CC4-grid-container">
    <div className="CC4-grid-item">
      <div className="who_get">
        <div className="who_img">
          <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/student.svg" alt="Student"/>
        </div>
        <h4>Students</h4>
      </div>
    </div>
    <div className="CC4-grid-item">
      <div className="who_get">
        <div className="who_img">
          <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/instructor.svg" alt="Instructor"/>
        </div>
        <h4>Instructor</h4>
      </div>
    </div>
       </div>
       </div>


       <div className="CC_215xd5">
        <div className="CC-grid-container">
        <div className="CC-title589">
							<h2>What Will You Get?</h2>
							<p>Cursus company, which confirms your skills and knowledge of Certification</p>
						</div>
        </div>

        <div className="CC5-grid-container">
    <div className="CC-knowledge_dts">
        <p>Morbi eget elit eget turpis varius mollis eget vel massa. Donec porttitor, sapien eget commodo vulputate, erat felis aliquam dolor, non condimentum libero dolor vel ipsum. Sed porttitor nisi eget nulla ullamcorper eleifend. Fusce tristique sapien nisi, vel feugiat neque luctus sit amet. Quisque consequat quis turpis in mattis. Maecenas eget mollis nisl. Cras porta dapibus est, quis malesuada ex iaculis at. Vestibulum egestas tortor in urna tempor, in fermentum lectus bibendum. In leo leo, bibendum at pharetra at, tincidunt in nulla. In vel malesuada nulla, sed tincidunt neque. Phasellus at massa vel sem aliquet sodales non in magna. Ut tempus ipsum sagittis neque cursus euismod. Vivamus luctus elementum tortor, ac aliquet dolor vehicula et. Nulla vehicula pharetra lacus ornare gravida. Vivamus mollis ullamcorper dui quis gravida. Aenean pulvinar pulvinar arcu a suscipit.</p>
        <button className="CC-knowledge_btn">Knowledge Base</button>
    </div>
        </div>
       </div>


       <div className="CC6-grid-container">
        <Footer/>
       </div>
    </div>
  )
}

export default CertificationCenter
