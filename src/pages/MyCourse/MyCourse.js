import React, { useState } from 'react';
import "./MyCourse.css";
function MyCourse() {
    // My course
    const courses = [
        {
          itemNo: 'IT-001',
          title: 'Course Title Here',
          publishDate: '06 April 2020 | 08:31',
          sales: 15,
          parts: 5,
          category: 'Web Development',
          status: 'Active',
          actionEdit: '#',
          actionDelete: '#'
        },
        {
          itemNo: 'IT-002',
          title: 'Course Title Here',
          publishDate: '05 April 2020 | 05:15',
          sales: 30,
          parts: 3,
          category: 'Graphic Design',
          status: 'Active',
          actionEdit: '#',
          actionDelete: '#'
        },
        {
          itemNo: 'IT-003',
          title: 'Course Title',
          publishDate: '03 April 2020 | 01:30',
          sales: 14,
          parts: 5,
          category: 'Bootstrap',
          status: 'Active',
          actionEdit: '#',
          actionDelete: '#'
        },
        {
          itemNo: 'IT-004',
          title: 'Course Title Here',
          publishDate: '02 April 2020 | 05:15',
          sales: 110,
          parts: 9,
          category: 'Game Development',
          status: 'Active',
          actionEdit: '#',
          actionDelete: '#'
        },
        {
          itemNo: 'IT-005',
          title: 'Course Title Here',
          publishDate: '28 March 2020 | 05:15',
          sales: 185,
          parts: 10,
          category: 'C++',
          status: 'Active',
          actionEdit: '#',
          actionDelete: '#'
        }
      ];


  const [activeTab, setActiveTab] = useState('my-courses');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="MyCoursePage">



        {/* Body myCourse */}
    <div className="MyCourse-selec-container">
      <div className="MyCourse-nav-container MyCourse-my_crse_nav" id="pills-tab" role="tablist">
        <div className="MyCourse-nav-item">
          <a
            className={`MyCourse-nav-link ${activeTab === 'my-courses' ? 'active' : ''}`}
            onClick={() => handleTabClick('my-courses')}
            role="tab"
            aria-selected={activeTab === 'my-courses'}
          >
            <i className="uil uil-book-alt"></i> My Courses
          </a>
        </div>
        <div className="MyCourse-nav-item">
          <a
            className={`MyCourse-nav-link ${activeTab === 'my-purchases' ? 'active' : ''}`}
            onClick={() => handleTabClick('my-purchases')}
            role="tab"
            aria-selected={activeTab === 'my-purchases'}
          >
            <i className="uil uil-download-alt"></i> My Purchases
          </a>
        </div>
        <div className="MyCourse-nav-item">
          <a
            className={`MyCourse-nav-link ${activeTab === 'upcoming-courses' ? 'active' : ''}`}
            onClick={() => handleTabClick('upcoming-courses')}
            role="tab"
            aria-selected={activeTab === 'upcoming-courses'}
          >
            <i className="uil uil-upload-alt"></i> Upcoming Courses
          </a>
        </div>
        <div className="MyCourse-nav-item">
          <a
            className={`MyCourse-nav-link ${activeTab === 'discounts' ? 'active' : ''}`}
            onClick={() => handleTabClick('discounts')}
            role="tab"
            aria-selected={activeTab === 'discounts'}
          >
            <i className="uil uil-tag-alt"></i> Discounts
          </a>
        </div>
        <div className="MyCourse-nav-item">
          <a
            className={`MyCourse-nav-link ${activeTab === 'promotions' ? 'active' : ''}`}
            onClick={() => handleTabClick('promotions')}
            role="tab"
            aria-selected={activeTab === 'promotions'}
          >
            <i className="uil uil-megaphone"></i> Promotions
          </a>
        </div>
      </div>

      <div className="MyCourse-tab-content">
        {activeTab === 'my-courses' && (
          <div className="MyCourse-tab-pane active" id="my-courses-tab" role="tabpanel">
            {/* Nội dung cho tab My Courses */}

            <div className="MyCouser-containerr">
                    <div className="MyCouser-table-container">
                    <table className="MyCourse-table ucp-table">


<thead className="MyCourse-thead-s">
  <tr>
    <th className="MyCourse-text-center" scope="col">Item No.</th>
    <th>Title</th>
    <th className="MyCourse-text-center" scope="col">Publish Date</th>
    <th className="MyCourse-text-center" scope="col">Sales</th>
    <th className="MyCourse-text-center" scope="col">Parts</th>
    <th className="MyCourse-text-center" scope="col">Category</th>
    <th className="MyCourse-text-center" scope="col">Status</th>
    <th className="MyCourse-text-center" scope="col">Action</th>
  </tr>
</thead>
<tbody>
  {courses.map(course => (
    <tr key={course.itemNo}>
      <td className="MyCourse-text-center">{course.itemNo}</td>
      <td>{course.title}</td>
      <td className="MyCourse-text-center">{course.publishDate}</td>
      <td className="MyCourse-text-center">{course.sales}</td>
      <td className="MyCourse-text-center">{course.parts}</td>
      <td className="MyCourse-text-center" ><a href="#">{course.category} </a></td>
      <td className="MyCourse-text-center"><b className="MyCourse-course_active">{course.status}</b></td>
      <td className="MyCourse-text-center">
        <a href={course.actionEdit} title="Edit" className="MyCourse-gray-s"><i className="uil uil-edit-alt"></i></a>
        <a href={course.actionDelete} title="Delete" className="MyCourse-gray-s"><i className="uil uil-trash-alt"></i></a>
      </td>
    </tr>
  ))}
</tbody>
     </table>
                    </div>

                </div>

          </div>
        )}
        {activeTab === 'my-purchases' && (
          <div className="MyCourse-tab-pane active" id="my-purchases-tab" role="tabpanel">
            {/* Nội dung cho tab My Purchases */}
            <h4>My Purchases</h4>
            <p>Content for My Purchases tab goes here.</p>
          </div>
        )}
        {activeTab === 'upcoming-courses' && (
          <div className="MyCourse-tab-pane active" id="upcoming-courses-tab" role="tabpanel">
            {/* Nội dung cho tab Upcoming Courses */}
            <h4>Upcoming Courses</h4>
            <p>Content for Upcoming Courses tab goes here.</p>
          </div>
        )}
        {activeTab === 'discounts' && (
          <div className="MyCourse-tab-pane active" id="discounts-tab" role="tabpanel">
            {/* Nội dung cho tab Discounts */}
            <h4>Discounts</h4>
            <p>Content for Discounts tab goes here.</p>
          </div>
        )}
        {activeTab === 'promotions' && (
          <div className="MyCourse-tab-pane active" id="promotions-tab" role="tabpanel">
            {/* Nội dung cho tab Promotions */}
            <h4>Promotions</h4>
            <p>Content for Promotions tab goes here.</p>
          </div>
        )}
      </div>
    </div>
    </div>

  );
}

export default MyCourse;
