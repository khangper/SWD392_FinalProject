import React, { useState } from 'react';
import './PriceTabs.css';

const PriceTabs = ({price, setPrice}) => {
  const [activeTab, setActiveTab] = useState('free');
  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); 
    setPrice(value);
  };
  return (
    <div className="price-course-pricing-tabs">
      <div className="price-tab-buttons">
        <button
          className={`price-tab-button ${activeTab === 'free' ? 'price-active' : ''}`}
          onClick={() => setActiveTab('free')}
        >
          <i className="fas fa-tag"></i> Free
        </button>
        <button
          className={`price-tab-button ${activeTab === 'paid' ? 'price-active' : ''}`}
          onClick={() => setActiveTab('paid')}
        >
          <i className="fas fa-shopping-cart"></i> Paid
        </button>
      </div>
      <div className="price-tab-content">
        {activeTab === 'free' && (
            <div className='price-tab-block'>
                <div className="price-tab-panel">
          <label className="lecture-switch">
                        <input
                          type="checkbox"
                          className="preview-op"
                          value=""
                        />
                        <span></span>
                      </label>
                      <label htmlFor='require-login' className='lbl-quiz'>Require Log in</label>
          </div>
                <div className="price-tab-panel mt-3">
          <label className="lecture-switch">
                        <input
                          type="checkbox"
                          className="preview-op"
                          value=""
                        />
                        <span></span>
                      </label>
                      <label htmlFor='require-login' className='lbl-quiz'>Require Enroll</label>
          </div>
          <p>If the course is free, if student require to enroll your course, if not required enroll, if students required sign in to your website to take this course.</p>
            </div>
          
          
          
        )}
        {activeTab === 'paid' && (
          <div className="price-tab-panel-2">
            <div className="content-tab-title">
                  <h4>Regular Price*</h4>
                </div>
                <div className="headline-group-2">
                    <div className="form-group">
                      <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="$0"
                        value={price}
                        onChange={handlePriceChange}
                      />
                      <div className="form-counter">USD</div>
                    </div>
                  </div>
                  <div className="content-tab-title">
                  <h4>Discount Price*</h4>
                </div>
                <div className="headline-group-2">
                    <div className="form-group">
                      <input
                        type="text"
                        id="headline"
                        name="headline"
                        placeholder="$0"
                      />
                      <div className="form-counter">USD</div>
                    </div>
                  </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceTabs;
