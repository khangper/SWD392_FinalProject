import React from 'react'
import './Analytics.css'
import analyticsIcon from '../../assets/chart.png';
const Analytics = () => {
  return (
    <div className='analytics-container'>
    <section className='top-chart-section'>
        <div className='top-chart-header'>
            <h2 className='top-chart-title'><img src={analyticsIcon}/>Analytics</h2>
        </div>
        <div className='top-chart-container'>
                <div className='top-chart-item'>
                    <div className='analytics-card'>
                        <div className='analytics-card-body'>
                            <h2>839</h2>
                            <p>Subcribers</p>
                            <div className='chartjs-wrapper'>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top-chart-item'>haha</div>
                <div className='top-chart-item'>haha</div>
        </div>
    </section>
        </div>
  )
}

export default Analytics