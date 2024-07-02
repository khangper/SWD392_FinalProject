import React from 'react'
import './TermsOfUse.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Search from '../../assets/search.png';

const TermsOfUse = () => {
    return (
        <>
            <Header />
            <div className='Terms_Main'>
                <div className='Terms_Title'>
                    <div className='Terms_Title_Conatiner'>
                        <div className='Terms_Small_Title'>
                            <div className='Terms_Small_Title_Left'>
                                <a href="index.html">Home&nbsp;</a>
                                <p>/ Terms of Use</p>
                            </div>
                            <div className='Terms_Small_Title_Right'>
                                <img src={Search} alt="" className="search-icon" />
                                <input type="text" placeholder="Search " />
                            </div>
                        </div>
                        <div className='Terms_Big_Title'>
                            <h2>Terms of Use</h2>
                        </div>
                    </div>

                </div>

                <div className='Terms_Body'>
                    <div className='Terms_Body_Col_Left'>
                        <div className='Terms_Body_Table'>
                            <div className='Terms_Body_Table_Item'>
                                <a href="#" className="Terms_Body_Table_Item_Detail active">Terms of Use</a>
                            </div>
                            <div className='Terms_Body_Table_Item'>
                                <a href="#" className="Terms_Body_Table_Item_Detail ">Privacy Policy</a>
                            </div>
                            <div className='Terms_Body_Table_Item'>
                                <a href="#" className="Terms_Body_Table_Item_Detail ">Cookie Policy</a>
                            </div>
                            <div className='Terms_Body_Table_Item'>
                                <a href="#" className="Terms_Body_Table_Item_Detail ">Copyright Policy</a>
                            </div>
                            <div className='Terms_Body_Table_Item'>
                                <a href="#" className="Terms_Body_Table_Item_Detail ">Cursus API Agreement</a>
                            </div>
                            <div className='Terms_Body_Table_Item'>
                                <a href="#" className="Terms_Body_Table_Item_Detail ">Instructor Terms</a>
                            </div>
                            <div className='Terms_Body_Table_Item'>
                                <a href="#" className="Terms_Body_Table_Item_Detail ">Credits Program</a>
                            </div>
                            <div className='Terms_Body_Table_Item'>
                                <a href="#" className="Terms_Body_Table_Item_Detail">Pricing and Promotions Policy</a>
                            </div>
                        </div>
                    </div>

                    <div className='Terms_Body_Col_Right'>
                        <div className='Terms_Body_Content Terms_Body_Summary'>
                            <div className="Terms_Body_Summary_atlink">These Terms of Use <strong>("Terms")</strong> were last updated on August 1, 2020.</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat maximus pellentesque. Integer sem enim, luctus at nibh at, condimentum sagittis sapien. Sed tempus ipsum erat, sit amet efficitur velit interdum eu. Vestibulum hendrerit id dolor eu scelerisque. Phasellus ex dui, consequat nec feugiat eu, dapibus eget ante. Sed sodales interdum dui, at euismod mi feugiat hendrerit. Suspendisse auctor libero in tempor mollis. Nulla et dolor velit. Aliquam sit amet luctus quam.</p>
                            <p class="Terms_Body_Summary_mt_4">
                                Nam a egestas libero, eget eleifend turpis. Sed id ipsum a ipsum aliquam laoreet sit amet sit amet nibh. Proin dapibus, libero sed posuere rhoncus, orci mi cursus enim, at accumsan eros massa lacinia mi. Nunc eget finibus felis, volutpat malesuada sem. Aliquam ac nisl pellentesque, varius neque sit amet, porttitor nunc. Nullam elit tellus, dapibus non eleifend sed, hendrerit eget velit. Aliquam ut felis dictum, tincidunt magna vitae, aliquam massa. In porttitor tristique quam, non dignissim sapien pharetra ultrices. Cras non ante non velit mollis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.
                            </p>
                            <p class="Terms_Body_Summary_mt_4">
                                Etiam lobortis dictum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultricies efficitur dui, suscipit tempus elit condimentum quis. Duis sed vestibulum tortor, eget cursus odio.
                            </p>
                        </div>
                        <div className='Terms_Body_Content TBC35 TBC30'>
                            <h4>Table of Contents</h4>
                            <div className='Terms_Body_Content_Table'>
                                <div className='Terms_Body_Content_Table_Item'>
                                    1.<a href="#" className="Terms_Body_Content_Table_Item_Detail">Accounts</a>
                                </div>
                                <div className='Terms_Body_Content_Table_Item'>
                                    2.<a href="#" className="Terms_Body_Content_Table_Item_Detail">Course Enrollment and Lifetime Access</a>
                                </div>
                                <div className='Terms_Body_Content_Table_Item'>
                                    3.<a href="#" className="Terms_Body_Content_Table_Item_Detail">Payments, Credits, and Refunds</a>
                                </div>
                                <div className='Terms_Body_Content_Table_Item'>
                                    4.<a href="#" className="Terms_Body_Content_Table_Item_Detail">Content and Behavior Rules</a>
                                </div>
                                <div className='Terms_Body_Content_Table_Item'>
                                    5.<a href="#" className="Terms_Body_Content_Table_Item_Detail">Cursus's Rights to Content You Post</a>
                                </div>
                                <div className='Terms_Body_Content_Table_Item'>
                                    6.<a href="#" className="Terms_Body_Content_Table_Item_Detail">Cursus's Rights</a>
                                </div>
                                <div className='Terms_Body_Content_Table_Item'>
                                    7.<a href="#" className="Terms_Body_Content_Table_Item_Detail">How to Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className='Terms_Body_Content TBC35 TBC30'>
                            <h4>1. Accounts</h4>
                            <p>
                                Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim quis orci aliquam, non cursus urna pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus magna sed elit interdum consequat. Vestibulum eu tortor vel ante feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus. Fusce viverra, lectus egestas tincidunt cursus, tortor sapien convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus bibendum mauris ut iaculis.
                            </p>
                        </div>
                        <div className='Terms_Body_Content TBC35 TBC30'>
                            <h4>2. Course Enrollment and Lifetime Access</h4>
                            <p>Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.</p>
                        </div>
                        <div className='Terms_Body_Content TBC35 TBC30'>
                            <h4>3. Payments, Credits, and Refunds</h4>
                            <p>Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim quis orci aliquam, non cursus urna pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus magna sed elit interdum consequat. Vestibulum eu tortor vel ante feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus. Fusce viverra, lectus egestas tincidunt cursus, tortor sapien convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus bibendum mauris ut iaculis.</p>
                        </div>
                        <div className='Terms_Body_Content TBC35 TBC30'>
                            <h4>4. Content and Behavior Rules</h4>
                            <p>Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.</p>
                        </div>
                        <div className='Terms_Body_Content TBC35 TBC30'>
                            <h4>5. Cursus's Rights to Content You Post</h4>
                            <p>Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim quis orci aliquam, non cursus urna pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus magna sed elit interdum consequat. Vestibulum eu tortor vel ante feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus. Fusce viverra, lectus egestas tincidunt cursus, tortor sapien convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus bibendum mauris ut iaculis.</p>
                        </div>
                        <div className='Terms_Body_Content TBC35 TBC30'>
                            <h4>6. Cursus's Rights</h4>
                            <p>Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.</p>
                        </div>
                        <div className='Terms_Body_Content TBC35 TBC30'>
                            <h4>7. How to Contact Us</h4>
                            <p>Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim quis orci aliquam, non cursus urna pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus magna sed elit interdum consequat. Vestibulum eu tortor vel ante feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus. Fusce viverra, lectus egestas tincidunt cursus, tortor sapien convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus bibendum mauris ut iaculis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermsOfUse