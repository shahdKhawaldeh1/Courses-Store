import React from "react";
import "./styles.css";
import course1 from "../../assets/images/course1.png";
import course2 from "../../assets/images/course2.png";
import course3 from "../../assets/images/course3.png";
import course4 from "../../assets/images/course4.png";

export const Home = () => {
  return (
    <>
     <section className="about-container">
      <div className="main">
        <div className="social">
          
        </div>
        <div className="detail">
          <h1>
          Let's Find The Right <span>Course</span> For you
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
          </p>
          <div className="btn">
            <button>Download CV</button>
          </div>
        </div>
        <div className="img-sec">
          <div className="images">
            {/* <img src="sahr.png" alt="" className="img-w" /> */}
          </div>
        </div>
      </div>
    </section>

    {/*  Courses section */}
      <section className="courses">
        <div className="container">
          <div className="row">
            <div className="course-items">
              <div className="course">
                <div className="course-card">
                  <img className="course-img" alt="course1" src={course1} />
                  <div className="course-info">
                    <span>Best Course</span>
                    <span>$20 USD</span>
                  </div>
                </div>

                <div className="course-details">
                  <div className="row">
                  <h2>Html $ CSS</h2>
                  </div>
                  <div className="row">
                    <span className="videos">120 videos</span>
                    <span className="teacher">2 Teachers</span>
                  </div>
                </div>
              </div>

              <div className="course">
                <div className="course-card">
                  <img className="course-img" alt="course2" src={course3} />
                  <div className="course-info">
                    <span>Best Course</span>
                    <span>$20 USD</span>
                  </div>
                </div>
               
                <div className="course-details">
                  <div className="row">
                  <h2>Photograpghy</h2>
                  </div>
                  <div className="row">
                    <span className="videos">120 videos</span>
                    <span className="teacher" >2 Teachers</span>
                  </div>
                </div>
              </div>

              <div className="course">
                <div className="course-card">
                  <img className="course-img" alt="course3" src={course2} />
                  <div className="course-info">
                    <span>Best Course</span>
                    <span>$20 USD</span>
                  </div>
                </div>
               
                <div className="course-details">
                  <div className="row">
                  <h2>Full Stack</h2>
                  </div>
                  <div className="row">
                    <span className="videos">120 videos</span>
                    <span className="teacher">2 Teachers</span>
                  </div>
                </div>
              </div>

              <div className="course">
                <div className="course-card">
                  <img className="course-img" alt="course4" src={course4} />
                  <div className="course-info">
                    <span>Best Course</span>
                    <span>$20 USD</span>
                  </div>
                </div>
                
                <div className="course-details">
                  <div className="row">
                  <h2>Graphic Design</h2>
                  </div>
                  <div className="row">
                    <span className="videos">120 videos</span>
                    <span className="teacher">2 Teachers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-description">
              <p>AVAILABLE FOR YOU</p>
              <h2>Available Courses</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="course-btn">See all</button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
