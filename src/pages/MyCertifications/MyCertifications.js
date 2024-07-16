import React from 'react';
import './MyCertifications.css';
import garbage from '../../assets/garbage.png';

const MyCertifications = () => {
    const certifications = [
        {
            id: 1,
            name: 'WordPress Certificate',
            score1: 15,
            score2: 20,
            date: '6 April 2019',
            link: 'https://gambolthemes.net/html-imgs/certificate.jpg'
        },
        {
            id: 2,
            name: 'WordPress Pro Certificate',
            score1: 14,
            score2: 20,
            date: '4 April 2019',
            link: 'http://gambolthemes.net/html-imgs/certificate.jpg'
        },
        {
            id: 3,
            name: 'HTML CSS Certificate',
            score1: 18,
            score2: 20,
            date: '3 April 2019',
            link: 'http://gambolthemes.net/html-imgs/certificate.jpg'
        }
    ];

    return (
        <div className='MyCertifications_Container'>
            <div className='MyCertifications_Header'>
                <h2 className='MyCertifications_Header_Title'>
                    My Certifications
                </h2>
            </div>

            <div className='MyCertifications_Body'>
                <div className='MyCertifications_Body_Col'>
                    <div className="MyCertifications_card_dash1">
                        <div className="MyCertifications_card_dash_left1">
                            <i className="uil uil-award"></i>
                            <h1>Jump Into New Certificate</h1>
                        </div>
                        <div className="MyCertifications_card_dash_right1">
                            <button className="MyCertifications_create_btn_dash" onClick={() => window.location.href = '/certificationcenter'}>
                                New Certificate
                            </button>
                        </div>
                    </div>

                    <div className="MyCertifications_table_cerificate">
                        <div className="MyCertifications_table_responsive">
                            <table className="MyCertifications_table MyCertifications_ucp_table" id="content_table">
                                <thead className="MyCertifications_thead_s">
                                    <tr>
                                        <th className="MyCertifications_text_center" scope="col">Item No.</th>
                                        <th scope="col">Title</th>
                                        <th className="MyCertifications_text_center" scope="col">Marks</th>
                                        <th className="MyCertifications_text_center" scope="col">Out Of</th>
                                        <th className="MyCertifications_text_center" scope="col">Upload Date</th>
                                        <th className="MyCertifications_text_center" scope="col">Certificate</th>
                                        <th className="MyCertifications_text_center" scope="col">Controls</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {certifications.map(cert => (
                                        <tr key={cert.id}>
                                            <td className="MyCertifications_text_center">{cert.id}</td>
                                            <td className="MyCertifications_cell_ta">{cert.name}</td>
                                            <td className="MyCertifications_text_center">{cert.score1}</td>
                                            <td className="MyCertifications_text_center">{cert.score2}</td>
                                            <td className="MyCertifications_text_center">{cert.date}</td>
                                            <td className="MyCertifications_text_center">
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer">View</a>
                                            </td>
                                            <td className="MyCertifications_text_center">
                                                <a href="#" title="Delete" className="MyCertifications_gray_s"><img src={garbage} className="Edit-icon" alt="Delete" /></a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCertifications;
