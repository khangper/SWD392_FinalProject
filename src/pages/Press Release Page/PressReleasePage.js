import React from 'react'
import './PressReleasePage.css'
import Footer from '../../components/Footer/Footer'

const PressReleasePage = () => {
    return (
        <>
            <div className='Press_Container'>
                <div className='Press_Header'>
                    <div className='Back_Cursus'>
                        <a href="index.html" class="hde151">Back To Cursus</a>
                        <a href="index.html" className="hde151">Back To Cursus</a>
                    </div>
                    <div className='Press_Header_Logo'>
                        <a href="index.html">
                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg" alt="" />
                        </a>
                    </div>
                    <div className='Press_Header_Profile'>
                        <div className='Press_Dropdown_Profile'>
                            <a href="#" class="press_account" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                            <a href="#" className="press_account" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                                <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/hd_dp.jpg" alt="" />
                            </a>
                            {/* <div className='Dropdown_Detail'>
                            <div className='Press_Profile_Channel'>
                                <div className='Profile_Channel_Items'>
                                    <div className='Profile_Link'>
                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/hd_dp.jpg" alt="" />
                                    </div>
                                    <div className='Profile_Content'>
                                        <h6>Joginder Singh</h6>
                                        <i class="uil uil-check-circle">
                                        <i className="uil uil-check-circle">
                                        </i>
                                        <span>gambol943@gmail.com</span>
                                    </div>
                                </div>
                                <a href="my_instructor_profile_view.html" class="dp_link_12">View Instructor Profile</a>
                                <a href="my_instructor_profile_view.html" className="dp_link_12">View Instructor Profile</a>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
                <div className='Press_Nav'>
                    <div className='Press_Tab'>
                        <nav>
                            <div className='Nav_Content'>
                                <a class="nav_content_item nav_content_link" href="about_us.html">About</a>
                                <a class="nav_content_item nav_content_link" href="our_blog.html">Blog</a>
                                <a class="nav_content_item nav_content_link" href="company_details.html">Company</a>
                                <a class="nav_content_item nav_content_link" href="career.html">Careers</a>
                                <a class="nav_content_item nav_content_link active" href="press.html">Press</a>
                                <a className="nav_content_item nav_content_link" href="about_us.html">About</a>
                                <a className="nav_content_item nav_content_link" href="our_blog.html">Blog</a>
                                <a className="nav_content_item nav_content_link" href="company_details.html">Company</a>
                                <a className="nav_content_item nav_content_link" href="career.html">Careers</a>
                                <a className="nav_content_item nav_content_link active" href="press.html">Press</a>
                            </div>

                        </nav>

                    </div>
                    <div className='Press_Title'>
                        <h2>What others are saying</h2>
                    </div>
                </div>
                <div className='Press_Body'>
                    <div className='Left_Col'>
                        <div className='Press_Body_Left'>
                            <div className='Press_Body_Social'>
                                <button class="Scl_Twt" data-href="#" onclick="sharingPopup(this);" id="twitter-share">
                                    <i class="uil uil-twitter ic45"></i>Follow
                                <button className="Scl_Twt" data-href="#" onclick="sharingPopup(this);" id="twitter-share">
                                    <i className="uil uil-twitter ic45"></i>Follow
                                </button>
                                <button class="Scl_Fb" data-href="#" onclick="sharingPopup(this);" id="facebook-share">
                                    <i class="uil uil-facebook ic45"></i>Follow
                                <button className="Scl_Fb" data-href="#" onclick="sharingPopup(this);" id="facebook-share">
                                    <i className="uil uil-facebook ic45"></i>Follow
                                </button>
                            </div>
                            <div className='Press_Body_Help'>
                                <p>Learn More</p>
                                <a href="#">Cursus Help Center</a>
                            </div>
                        </div>
                    </div>

                    <div className='Right_Col'>
                        <div className='Press_Body_Right'>
                            <div className='Press_Cursus_News'>
                                <h2>Cursus in the News</h2>
                                <p>For media interviews and inquiries, please send an email to <a href="#">press@cursus.com</a></p>
                                <div class="Cursus_News_Item New35">
                                    <div class="vdtopress">March 10, 2020</div>
                                <div className="Cursus_News_Item New35">
                                    <div className="vdtopress">March 10, 2020</div>
                                    <h4>Press News Title</h4>
                                    <p class="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                    <a href="#" class="press_dt_view">Read More <i class="uil uil-angle-double-right"></i></a>
                                    <p className="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                    <a href="#" className="press_dt_view">Read More <i className="uil uil-angle-double-right"></i></a>
                                </div>
                                <div class="Cursus_News_Item New30">
                                    <div class="vdtopress">March 10, 2020</div>
                                <div className="Cursus_News_Item New30">
                                    <div className="vdtopress">March 10, 2020</div>
                                    <h4>Press News Title</h4>
                                    <p class="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                    <a href="#" class="press_dt_view">Read More<i class="uil uil-angle-double-right"></i></a>
                                    <p className="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                    <a href="#" className="press_dt_view">Read More<i className="uil uil-angle-double-right"></i></a>
                                </div>
                                <div class="Cursus_News_Item New30">
                                    <div class="vdtopress">March 10, 2020</div>
                                <div className="Cursus_News_Item New30">
                                    <div className="vdtopress">March 10, 2020</div>
                                    <h4>Press News Title</h4>
                                    <p class="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                    <a href="#" class="press_dt_view">Read More<i class="uil uil-angle-double-right"></i></a>
                                    <p className="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                    <a href="#" className="press_dt_view">Read More<i className="uil uil-angle-double-right"></i></a>
                                </div>
                                <a href="#" class="allnews_btn">See More News</a>
                                <a href="#" className="allnews_btn">See More News</a>
                            </div>
                            <div className='Press_Release'>
                                <h2>Press Releases</h2>
                                <p>For Release from Cursus </p>
                                <div class="Release_Item Release35">
                                    <div class="vdtopress">March 10, 2020</div>
                                    <a href="#" class="press_title">Press Release Title</a>
                                <div className="Release_Item Release35">
                                    <div className="vdtopress">March 10, 2020</div>
                                    <a href="#" className="press_title">Press Release Title</a>
                                </div>
                                <div class="Release_Item Release20">
                                    <div class="vdtopress">March 10, 2020</div>
                                    <a href="#" class="press_title">Press Release Title</a>
                                <div className="Release_Item Release20">
                                    <div className="vdtopress">March 10, 2020</div>
                                    <a href="#" className="press_title">Press Release Title</a>
                                </div>
                                <div class="Release_Item Release20">
                                    <div class="vdtopress">March 10, 2020</div>
                                    <a href="#" class="press_title">Press Release Title</a>
                                <div className="Release_Item Release20">
                                    <div className="vdtopress">March 10, 2020</div>
                                    <a href="#" className="press_title">Press Release Title</a>
                                </div>
                                <div class="Release_Item Release20">
                                    <div class="vdtopress">March 10, 2020</div>
                                    <a href="#" class="press_title">Press Release Title</a>
                                <div className="Release_Item Release20">
                                    <div className="vdtopress">March 10, 2020</div>
                                    <a href="#" className="press_title">Press Release Title</a>
                                </div>
                                <div class="Release_Item Release20">
                                    <div class="vdtopress">March 10, 2020</div>
                                    <a href="#" class="press_title">Press Release Title</a>
                                <div className="Release_Item Release20">
                                    <div className="vdtopress">March 10, 2020</div>
                                    <a href="#" className="press_title">Press Release Title</a>

                                </div>
                                <a href="#" class="allnews_btn">See More Press Releases</a>
                                <a href="#" className="allnews_btn">See More Press Releases</a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default PressReleasePage