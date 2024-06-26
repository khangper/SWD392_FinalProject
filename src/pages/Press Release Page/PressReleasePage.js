import React from 'react'
import './PressReleasePage.css'
const PressReleasePage = () => {
    return (
        <div className='Press_Container'>
            <div className='Press_Header'>
                <div className='Back_Cursus'>
                    <a href="index.html" class="hde151">Back To Cursus</a>
                </div>
                <div className='Press_Header_Logo'>
                    <a href="index.html">
                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg" alt="" />
                    </a>
                </div>
                <div className='Press_Header_Profile'>
                    <div className='Press_Dropdown_Profile'>
                        <a href="#" class="press_account" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
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
                                        </i>
                                        <span>gambol943@gmail.com</span>
                                    </div>
                                </div>
                                <a href="my_instructor_profile_view.html" class="dp_link_12">View Instructor Profile</a>
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
                            </button>
                            <button class="Scl_Fb" data-href="#" onclick="sharingPopup(this);" id="facebook-share">
                                <i class="uil uil-facebook ic45"></i>Follow
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
                                <h4>Press News Title</h4>
                                <p class="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                <a href="#" class="press_dt_view">Read More <i class="uil uil-angle-double-right"></i></a>
                            </div>
                            <div class="Cursus_News_Item New30">
                                <div class="vdtopress">March 10, 2020</div>
                                <h4>Press News Title</h4>
                                <p class="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                <a href="#" class="press_dt_view">Read More<i class="uil uil-angle-double-right"></i></a>
                            </div>
                            <div class="Cursus_News_Item New30">
                                <div class="vdtopress">March 10, 2020</div>
                                <h4>Press News Title</h4>
                                <p class="blog_des">Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...</p>
                                <a href="#" class="press_dt_view">Read More<i class="uil uil-angle-double-right"></i></a>
                            </div>
                            <a href="#" class="allnews_btn">See More News</a>
                        </div>
                        <div className='Press_Release'>
                            <h2>Press Releases</h2>
                            <p>For Release from Cursus </p>
                            <div class="Release_Item Release35">
                                <div class="vdtopress">March 10, 2020</div>
                                <a href="#" class="press_title">Press Release Title</a>
                            </div>
                            <div class="Release_Item Release20">
                                <div class="vdtopress">March 10, 2020</div>
                                <a href="#" class="press_title">Press Release Title</a>
                            </div>
                            <div class="Release_Item Release20">
                                <div class="vdtopress">March 10, 2020</div>
                                <a href="#" class="press_title">Press Release Title</a>
                            </div>
                            <div class="Release_Item Release20">
                                <div class="vdtopress">March 10, 2020</div>
                                <a href="#" class="press_title">Press Release Title</a>
                            </div>
                            <div class="Release_Item Release20">
                                <div class="vdtopress">March 10, 2020</div>
                                <a href="#" class="press_title">Press Release Title</a>

                            </div>
                            <a href="#" class="allnews_btn">See More Press Releases</a>

                        </div>
                    </div>
                </div>

            </div>
            <div className='Press_Footer'>
                <div class="Footer_Row">
                    <div class="col">
                        <div class="item_f1">
                            <a href="about_us.html">About</a>
                            <a href="our_blog.html">Blog</a>
                            <a href="career.html">Careers</a>
                            <a href="press.html">Press</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="item_f1">
                            <a href="https://gambolthemes.net/html-items/cursus-new-demo/help.html">Help</a>
                            <a href="https://gambolthemes.net/html-items/cursus-new-demo/coming_soon.html">Advertise</a>
                            <a href="https://gambolthemes.net/html-items/cursus-new-demo/coming_soon.html">Developers</a>
                            <a href="https://gambolthemes.net/html-items/cursus-new-demo/contact_us.html">Contact Us</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="item_f1">
                            <a href="https://gambolthemes.net/html-items/cursus-new-demo/terms_of_use.html">Copyright Policy</a>
                            <a href="https://gambolthemes.net/html-items/cursus-new-demo/terms_of_use.html">Terms</a>
                            <a href="https://gambolthemes.net/html-items/cursus-new-demo/terms_of_use.html">Privacy Policy</a>
                            <a href="https://gambolthemes.net/html-items/cursus-new-demo/sitemap.html">Sitemap</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="item_f3">
                            <a href="#" class="btn1542">Teach on Cursus</a>
                            <div class="lng_btn">
                                <div class="ui language bottom right pointing dropdown floating" id="languages" data-content="Select Language" tabindex="0">
                                    <a href="#"><i class="uil uil-globe lft"></i>Language<i class="uil uil-angle-down rgt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="footer_bottm">
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="fotb_left">
                                    <li>
                                        <a href="index.html">
                                            <div class="footer_logo">
                                                <img src="images/logo1.svg" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <p>© 2024 <strong>Cursus</strong>. All Rights Reserved.</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <div class="edu_social_links">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PressReleasePage