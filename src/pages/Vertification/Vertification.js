import React from 'react'
import './Vertification.css'
const Vertification = () => {
    return (
        <div className='Vertification_Container'>
            <div className='Vertification_Header'>
                <h2 className="Vertification_Header_Title">
                    Verification
                </h2>
            </div>

            <div className='Vertification_Body'>
                <div className='Vertification_Body_Col'>
                    <div className='Vertification_Body_Content'>
                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/verified-account.svg" alt="" />
                        <h4>Verification with Edututs+</h4>
                        <p>
                            Praesent sed sapien gravida, tempus nunc nec, euismod turpis. Mauris quis scelerisque arcu. Quisque et aliquet nisl, id placerat est. Morbi quis imperdiet nulla.
                        </p>

                        <div className='Alert_Vertification'>
                            <div className='Alert_Vertification_Container'>
                                <div className="Vertification_required_group">
                                    <div className="Vertification_edututs_required_img">
                                        <i className="uil uil-dashboard"></i>
                                    </div>
                                    <div className="Vertification_edututs_required">
                                        <span><strong>14 subscribers</strong></span>
                                        <span>500 required</span>
                                    </div>
                                </div>
                            </div>

                            <div className='Alert_Vertification_Container'>
                                <div className="Vertification_required_group">
                                    <div className="Vertification_edututs_required_img">
                                        <i className="uil uil-dashboard"></i>
                                    </div>
                                    <div className="Vertification_edututs_required">
                                        <span>
                                            <strong>10 public watch hours</strong>
                                        </span>
                                        <span>1,500 required</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Vertification_apply_verify_text">
                            <i className="uil uil-check-circle"></i>
                            We'll send you an email when you're eligible to apply
                        </div>

                        <div className="Verification_form">
                            <h4>Verify Your ID</h4>
                            <form>
                                <div className="Verification_Form_CT Verti_mt_50 Verti_lbel25">
                                    <label>Course Title*</label>
                                    <div className="Verti_Textbox_Fullname Verti_swdh19">
                                        <input className="Verti_prompt Verti_srch_explore" type="text" placeholder="Full Name" name="fullname" id="full[name]" defaultValue="" />
                                    </div>
                                </div>
                                <div className="Verification_Form_UD Verti_mt_30 Verti_lbel25">
                                    <label>Upload Document*</label>
                                    <div className="Verti_input_group">
                                        <div className="Verti_custom_file">
                                            <input type="file" className="Verti_custom_file_input" id="inputGroupFile06" />
                                            <label className="Verti_custom_file_label" >
                                                No Choose
                                                <button className='Verti_custom_file_label_btn'>
                                                    Upload File
                                                </button>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button className="Verify_submit_btn" type="submit">Submit Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Vertification