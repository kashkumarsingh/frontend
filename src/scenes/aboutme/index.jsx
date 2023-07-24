const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="about-me-section p-3 p-lg-5 theme-bg-light"
      >
        <div className="container-fluid">
          <div className="profile-teaser row">
            <div className="col">
              <small className="emoji-text">
                &#128075; Welcome to my personal portfolio
              </small>
              <h2 className="name font-weight-bold mb-3">About Me</h2>
              {/*<div className="tagline mb-3">Frontend Developer</div>*/}
              <div className="bio mb-4">
                I am an experienced UI/UX Designer & Front-End Developer with 5+
                years of expertise in creating intuitive digital products.
                Throughout my career, I have collaborated with various
                companies, delivering high-quality solutions aligned with
                project goals. My skillset includes design thinking,
                wireframing, prototyping, HTML, CSS, JavaScript, and React. I
                have a strong visual design acumen and a proven track record of
                boosting user engagement by 20% through responsive design
                implementation. Additionally, I have streamlined project
                workflows, reducing development time by 15%. I am well-versed in
                React and WordPress platforms and adept at applying agile
                methodologies for efficient project management and iterative
                development
              </div>
              {/*bio*/}
              <div className="mb-4">
                <a className="btn btn-primary me-2 mb-3" href="#portfolio">
                  <i className="fas fa-arrow-alt-circle-right me-2"></i>
                  <span className="d-none d-md-inline">View</span> Portfolio
                </a>
                <a className="btn btn-secondary mb-3" href="#skills">
                  <i className="fas fa-file-alt me-2"></i>
                  <span className="d-none d-md-inline">View</span>
                  My Skills
                </a>
              </div>
            </div>
            {/*//col*/}
          </div>
        </div>
      </section>
      {/*about-me-section*/}
    </>
  );
};
export default AboutMe;
