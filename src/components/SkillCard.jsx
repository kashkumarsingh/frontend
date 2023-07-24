import PropTypes from 'prop-types';
const SkillCard = ({skillsData}) => {
  return (
    <>
     {skillsData.map((skill, index) => (
        <div key={index} className="item col-sm-12 col-md-6 col-lg-6">
          <div className="item-inner card p-4">
            <div className="item-icon d-flex gap-2 align-items-center">
              {skill.icons.map((icon, i) => (
                <img
                  key={i}
                  alt={icon.alt}
                  title={icon.title}
                  src={icon.src}
                  style={icon.style}
                />
              ))}
            </div>
            <h3 className="item-title">{skill.name}</h3>
            <div className="item-desc">{skill.description}</div>
          </div>
        </div>
      ))}
    </>
  )
}

SkillCard.propTypes = {
  skillsData: PropTypes.arrayOf(
    PropTypes.shape({
      icons: PropTypes.arrayOf(
        PropTypes.shape({
          alt: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
          style: PropTypes.object,
        })
      ).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default SkillCard