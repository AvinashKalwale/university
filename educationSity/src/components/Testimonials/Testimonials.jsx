import React from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' />
            <img src={back_icon} alt='' className='back-btn' />
            <div className='slider'>
                <ul>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt='' />
                                <div>
                                    <h3>John Deo</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at edusity was one of the 
                            best decisisons I've ever made. The supportive community,
                             state-of-the-art facilities,and commitment to academic 
                             excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt='' />
                                <div>
                                    <h3>Albert Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at edusity was one of the 
                            best decisisons I've ever made. The supportive community,
                             state-of-the-art facilities,and commitment to academic 
                             excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt='' />
                                <div>
                                    <h3>cynthia Wiley</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at edusity was one of the 
                            best decisisons I've ever made. The supportive community,
                             state-of-the-art facilities,and commitment to academic 
                             excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt='' />
                                <div>
                                    <h3>Otis Groff</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at edusity was one of the 
                            best decisisons I've ever made. The supportive community,
                             state-of-the-art facilities,and commitment to academic 
                             excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials