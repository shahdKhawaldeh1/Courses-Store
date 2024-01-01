import React from "react";
import "./styles.css";
import course1 from "../../assets/images/course1.png";
import course2 from "../../assets/images/course2.png";
import course3 from "../../assets/images/course3.png";
import course4 from "../../assets/images/course4.png";
import about from "../../assets/images/about.png";
import user1 from "../../assets/users/user1.png";

export const Home = () => {
  return (
    <>
      <section className="about-container">
        <div className="main">
          <div className="detail">
            <h1 className="detail-title">
              Let's Find The Right <span>Course</span> For You
            </h1>
            <p className="detail-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim, sem non convallis molestie.
            </p>
            <div className="detail-btns">
              <button className="detail-btn">See more</button>
            </div>
          </div>

          <div className="images">
            <img className="detail-img" alt="about me" src={about} />
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
                    <span className="teacher">2 Teachers</span>
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
              <div class="card">
                <p class="card-title">Available Courses</p>
                <p class="small-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat veritatis nobis saepe itaque rerum nostrum aliquid
                  obcaecati odio officia deleniti. Expedita iste et illum,
                  quaerat pariatur consequatur eum nihil itaque!
                </p>
                <button className="course-btn">See all</button>

                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials section */}

      <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="testimonial">
              <div className="user-info">
                <img className="user-img" alt="user image" src={user1} />
                <div className="user-data">
                  <h3 className="user-name">Friskidia</h3>
                  <span> Client</span>
                </div>
              </div>

              <div className="rating">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
              </div>
              <blockquote> <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. </q></blockquote>

            </div>

            <div className="testimonial">
              <div className="user-info">
                <img className="user-img" alt="user image" src={user1} />
                <div className="user-data">
                  <h3 className="user-name">Friskidia</h3>
                  <span> Client</span>
                </div>
              </div>

              <div className="rating">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 42 49"
                  fill="none"
                >
                  <path
                    d="M21 0L25.9393 18.6565H41.9232L28.992 30.1869L33.9313 48.8435L21 37.3131L8.06872 48.8435L13.008 30.1869L0.0767574 18.6565H16.0607L21 0Z"
                    fill="#F1CC4A"
                  />
                </svg>
              </div>
              <blockquote> <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. </q></blockquote>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
