import React, { useState, useEffect } from 'react';
import './StatementIS.css'
import dropdown from "../../../assets/dropdown.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatementISRequest } from '../../../redux/reduxActions/StatementISAction';
const StatementIS = () => {
    const dispatch = useDispatch();
    const { statementIS } = useSelector((state) => state.statementIS);

    useEffect(() => {
        dispatch(fetchStatementISRequest());
    }, [dispatch]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Monthly Invoices');

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    const courses = [
        {
            id: 1,
            date: '13 Apr 2020',
            orderID: '123456',
            type: 'Buy',
            title: 'Course Title Here',
            amount: '$17',
            fee: '-$5'
        },
        {
            id: 2,
            date: '13 Apr 2020',
            orderID: '123456',
            type: 'Buy',
            title: 'Course Title Here',
            amount: '$17',
            fee: '-$5'
        },
        {
            id: 3,
            date: '13 Apr 2020',
            orderID: '123456',
            type: 'Buy',
            title: 'Course Title Here',
            amount: '$17',
            fee: '-$5'
        },

    ];

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
                            <p className="tt-body">If you are not an instrutor, you can't use this section.</p>
                            <div>
                                <table className="statement-summary__table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <p className="t-heading">My funds</p>
                                            </th>
                                            <th>
                                                <p className="t-heading">Earnings</p>
                                            </th>
                                            <th>
                                                <p className="t-heading">Cursus Fees</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="statement-summary__funds">
                                                <p className="js-earnings__instructor-funds-wrapper">
                                                    <span className=""></span>
                                                    <span className="js-earnngs__instructor-funds t-currency">$289.64</span>
                                                </p>
                                            </td>
                                            <td className="statement-summary__earnings">
                                                <p className="js-earnings__earnings-wrapper">
                                                    <span className="tt__earning">+</span>
                                                    <span className="js-earnings__earnings t-currency">$458.00</span>
                                                </p>
                                            </td>
                                            <td className="statement-summary__fees">
                                                <p className="js-earnings__fees-wrapper">
                                                    <span className="tt__earning">-</span>
                                                    <span className="js-earnings__fees t-currency">$154.86</span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                                    <div className="sis-box-iput">
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
                                    <th className="MyCourse-text-center" scope="col">Fees</th>
                                    <th className="MyCourse-text-center" scope="col">Invoice</th>

                                </tr>
                            </thead>
                            <tbody>
                                {statementIS.map(course => (
                                    <tr key={course.id}>
                                        <td className="MyCourse-text-center">{course.date}</td>
                                        <td>{course.orderID}</td>
                                        <td className="MyCourse-text-center">{course.type}</td>
                                        <td className="MyCourse-text-center">{course.title}</td>
                                        <td className="MyCourse-text-center">{course.amount}</td>
                                        <td className="MyCourse-text-center">{course.fee}</td>
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

export default StatementIS