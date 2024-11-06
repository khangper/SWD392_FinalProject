import React, { useState, useEffect } from 'react';
import dropdown from "../../../assets/dropdown.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatementSTRequest } from '../../../redux/reduxActions/StatementSTAction';

const StatementST = () => {
    const dispatch = useDispatch();
    const { statement_course } = useSelector((state) => state.statementST);

    useEffect(() => {
        dispatch(fetchStatementSTRequest());
    }, [dispatch]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Monthly Invoices');

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <div className='statementis'>
            <div className="statementis-row">
                <div className="statementis-col-lg-12">
                    <h2 className="st_title"><i className="uil uil-file-alt"></i> Statements</h2>
                </div>
            </div>
            <div className="statementis-row">
                <div className="statementis-col-lg-8">
                    <div className="top_countries mt-30">
                        <div className="top_countries_title">
                            <h2>Earnings</h2>
                        </div>
                        <div className="statement_content">
                            <p className="tt-body">If you are not an instructor, you can't use this section.</p>
                            <a href="#" className="apply_instructor_btn">Become an Instructor</a>
                        </div>
                    </div>
                </div>

                <div className="statementis-col-lg-4">
                    <div className="top_countries mt-30">
                        <div className="top_countries_title">
                            <h2>View Invoices</h2>
                        </div>
                        <div className="statement_invoice_content">
                            <div className="date_selector">
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
                                <button className="st_download_btn"><i className="uil uil-download-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statementis-col-lg-12">
                    <div className="more_options_tt">
                        <li>
                            <div>
                                <button className="more_items_14 active">This Month</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button className="more_items_14">Last Month</button>
                            </div>
                        </li>
                        <li>
                            <div className="explore_search">
                                <div className="sis-search-box">
                                    <div className="sis-box-input">
                                        <input className="sis-search" type="text" placeholder="Document Number" />
                                        <i className="uil uil-search-alt icon icon8"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
            <div className="MyCourse-tab-pane active" id="my-courses-tab" role="tabpanel">
                <div className="MyCouser-container">
                    <div className="MyCouser-table-container">
                        <table className="MyCourse-table ucp-table">
                            <thead className="MyCourse-thead-s">
                                <tr>
                                    <th className="Statement-th-text" scope="col">Date</th>
                                    <th className="Statement-th-text">Order ID</th>
                                    <th className="Statement-th-text" scope="col">Type</th>
                                    <th className="Statement-th-text" scope="col">Title</th>
                                    <th className="Statement-th-text" scope="col">Amount</th>
                                    <th className="Statement-th-text" scope="col">Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statement_course.map(course => (
                                    <tr key={course.id}>
                                        <td className="MyCourse-text-center">{course.date}</td>
                                        <td className="MyCourse-text-center">{course.orderID}</td>
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
    );
};

export default StatementST;
