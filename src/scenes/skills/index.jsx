import SkillCard from "../../components/SkillCard";
import skillsData from "../../dataSource/skillsData";
const Skills = () => {
  return (
    <>
      <section id="skills" className="overview-section p-3 p-lg-5">
        <div className="container-fluid">
          <h2 className="section-title font-weight-bold mb-3">What I do</h2>
          <div className="section-intro mb-5">
            I specialize in creating intuitive digital products. My skillset
            includes UI/UX design, and I&apos;m proficient in HTML, CSS,
            JavaScript, and React. Additionally, I have experience building
            tools such as webpack, AWS, WordPress, MERN stack, and working with
            chart libraries like Chart.js and ApexCharts. My passion for
            seamless user experiences and technical versatility allows me to
            craft innovative and efficient solutions for various projects. Want
            to find out more about my experience? Check out{" "}
            <a className="text-link" href="#resume">
              my resume
            </a>{" "}
            and{" "}
            <a className="text-link" href="#portfolio">
              my portfolio
            </a>
            .
          </div>
          <div className="row">
              <SkillCard skillsData={skillsData}/>
          </div>
          {/*row*/}
        </div>
        {/*container*/}
      </section>
    </>
  );
};
export default Skills;
