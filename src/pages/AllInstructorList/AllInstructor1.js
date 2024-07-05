import React from 'react';
import facebook from '../../assets/facebook.png';
import x from '../../assets/x.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import './AllInstructorList.css'
import search_icon from '..//../assets/search.png';
export default function AllInstructor1() {
    // Dữ liệu giáo viên (instructors)
    const instructorsData = [
        {
            name: 'John Doe',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg',
            category: 'Wordpress & Plugin Tutor',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '100K Students',
            courses: '15 Courses'
        },
        {
            name: 'Kerstin Cable',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg',
            category: 'Language Learning Coach, Writer, Online Tutor',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '14K Students',
            courses: '11 Courses'
        },
        {
            name: 'Jose Portilla',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg',
            category: 'Head of Data Science, Pierian Data Inc.',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '1M Students',
            courses: '25 Courses'
        },
        {
            name: 'Jose Portilla',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg',
            category: 'Head of Data Science, Pierian Data Inc.',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '1M Students',
            courses: '25 Courses'
        },
        {
            name: 'Kyle Pew',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg',
            category: 'Microsoft Certified Trainer - 380,000+ Udemy Students',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '300K Students',
            courses: '18 Courses'
        },
        {
            name: 'Jaysen Batchelor',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg',
            category: 'Illustrator & Designer',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '491K Students',
            courses: '13 Courses'
        },
        {
            name: 'Quinton Batchelor',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg',
            category: 'Photographer & Instructor',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '364K Students',
            courses: '6 Courses'
        },
        {
            name: 'Eli Natoli',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-10.jpg',
            category: 'Entrepreneur - Passionate Teacher',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '115K Students',
            courses: '8 Courses'
        },
        {
            name: 'Sunny William',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-11.jpg',
            category: 'Entrepreneur - Passionate Teacher',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '615K Students',
            courses: '12 Courses'
        },
        {
            name: 'Neha Smith',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-12.jpg',
            category: 'English Teacher',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '15K Students',
            courses: '5 Courses'
        },
        {
            name: 'Sukhwinder Singh',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-13.jpg',
            category: 'Web Development',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '215K Students',
            courses: '15 Courses'
        },
        {
            name: 'Saloni Prabhakar',
            image: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-14.jpg',
            category: 'Photographer',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: '#',
                youtube: '#'
            },
            students: '10K Students',
            courses: '3 Courses'
        }
    ];

    return (
        <div>
                <header>
                <div className="explore-container">
            <section className="search-box">
        <img src={search_icon} alt="Search Icon" className="search-icon" />
        <input
          type="text"
          placeholder="Search Tutors"
        />
      </section>
            </div>
    </header>

    <main>
    <div className="All-Instructor-grid-container">
        {instructorsData.map((instructor, index) => (
            <div key={index} className="All-Instructor-grid-item">
                <div className="All-Instructor-fcrse_1 mt-30">
                    <div className="All-Instructor-tutor_img">
                        <a href="instructor_profile_view.html"><img src={instructor.image} alt={instructor.name} /></a>
                    </div>
                    <div className="All-Instructor-tutor_content_dt">
                        <div className="All-Instructor-tutor150">
                            <a href="instructor_profile_view.html" className="All-Instructor-tutor_name">{instructor.name}</a>
                            <div className="All-Instructor-mef78" title="Verify">
                                <div className="verified-badge"></div>
                            </div>
                        </div>
                        <div className="All-Instructor-tutor_cate">{instructor.category}</div>
                        <ul className="social-icons">
                            <li><a href="#" className="sc-fb"><img src={facebook} alt="Facebook" /></a></li>
                            <li><a href="#" className="sc-tw"><img src={x} alt="Twitter" /></a></li>
                            <li><a href="#" className="sc-ln"><img src={linkedin} alt="LinkedIn" /></a></li>
                            <li><a href="#" className="sc-yt"><img src={youtube} alt="YouTube" /></a></li>
                        </ul>
                        <div className="All-Instructor-tut1250">
                            <span className="All-Instructor-vdt15">{instructor.students}</span>
                            <span className="All-Instructor-vdt15">{instructor.courses}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>

    <div className="main-loader mt-20">
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </div>
    </main>
</div>

    );
}
