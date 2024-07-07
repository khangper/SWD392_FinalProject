import React, { useState } from 'react'
import dropdown from "../../../assets/dropdown.png";
const StatementST = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Monthly Invoices');

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    const courses = [
        {
            date: '13 Apr 2020',
            orderID: '123456',
            type: 'Buy',
            title: 'Course Title Here',
            amount: '$17',
        },
        {
            date: '13 Apr 2020',
            orderID: '123456',
            type: 'Buy',
            title: 'Course Title Here',
            amount: '$17',
        },
        {
            date: '13 Apr 2020',
            orderID: '123456',
            type: 'Buy',
            title: 'Course Title Here',
            amount: '$17',
        },

    ];
    return (
        <div className='statementis'>
            <div class="statementis-row">
                <div class="statementis-col-lg-12">
                    <h2 class="st_title"><i class="uil uil-file-alt"></i> Statements</h2>
                </div>
            </div>
            <div class="statementis-row">
                <div class="statementis-col-lg-8">
                    <div class="top_countries mt-30">
                        <div class="top_countries_title">
                            <h2>Earnings</h2>
                        </div>
                        <div class="statement_content">
                            <p class="tt-body">If you are not an instrutor, you can't use this section.</p>
                            <a href="#" class="apply_instructor_btn">Become a Instructor</a>
                        </div>
                    </div>
                </div>

                <div class="statementis-col-lg-4">
                    <div class="top_countries mt-30">
                        <div class="top_countries_title">
                            <h2>View Invoices</h2>
                        </div>
                        <div class="statement_invoice_content">
                            <div class="date_selector">
                                <div className="ui selection" tabIndex="0" onClick={toggleDropdown}>
                                    <input name="date" type="hidden" value={selectedValue} />
                                    <div className='sis-drop'>

                                        <span className="section-title-wrapper">

                                            <span className="section-title-text">{selectedValue}</span>
                                            <img className="sidebar-dropdown-caret-icon" src={dropdown} alt="Dropdown Icon" />
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <div className="dropdown-menu">
                                            <div className="top" onClick={() => handleSelect('April 2020')}>
                                                <div className="title">April 2020</div>
                                            </div>
                                            <div className="top" onClick={() => handleSelect('March 2020')}>
                                                <div className="title">March 2020</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button class="st_download_btn"><i class="uil uil-download-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="statementis-col-lg-12">
                    <div class="more_options_tt">
                        <li>
                            <div>
                                <button class="more_items_14 active">This Month</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button class="more_items_14">Last Month</button>
                            </div>
                        </li>
                        <li>
                            <div class="explore_search">
                                <div class="sis-search-box">
                                    <div class="sis-box-iput">
                                        <input class="sis-search" type="text" placeholder="Document Number" />
                                        <i class="uil uil-search-alt icon icon8"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>


            </div>
            <div className="MyCourse-tab-pane active" id="my-courses-tab" role="tabpanel">
                {/* Nội dung cho tab My Courses */}

                <div className="MyCouser-containerr">
                    <div className="MyCouser-table-container">
                        <table className="MyCourse-table ucp-table">
                            <thead className="MyCourse-thead-s">
                                <tr>
                                    <th className="MyCourse-text-center" scope="col">Date</th>
                                    <th className="MyCourse-text-center">Order ID</th>
                                    <th className="MyCourse-text-center" scope="col">Type</th>
                                    <th className="MyCourse-text-center" scope="col">Title</th>
                                    <th className="MyCourse-text-center" scope="col">Amount</th>
                                    <th className="MyCourse-text-center" scope="col">Invoice</th>

                                </tr>
                            </thead>
                            <tbody>
                                {courses.map(course => (
                                    <tr key={course.orderID}>
                                        <td className="MyCourse-text-center">{course.date}</td>
                                        <td>{course.orderID}</td>
                                        <td className="MyCourse-text-center">{course.type}</td>
                                        <td className="MyCourse-text-center">{course.title}</td>
                                        <td className="MyCourse-text-center">{course.amount}</td>
                                        <td className="MyCourse-text-center">
                                            <a href="#">View</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default StatementST