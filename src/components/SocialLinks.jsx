import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialLinks = () => {
  const socialLinksData = [
    {
      title: "LinkedIn",
      icon: "linkedin-in",
      type: "brand",
      href: "https://www.linkedin.com/in/kashkumar-singh/",
    },
    {
      title: "GitHub",
      icon: "github-alt",
      type: "brand",
      href: "https://github.com/kashkumarsingh",
    },
    {
      title: "Email",
      icon: "envelope",
      type: "regular",
      href: "mailto:kash.singh1989@gmail.com",
    },
  ];
  return (
    <ul className="social-list list-inline py-2 mx-auto">
      {socialLinksData.map(({ title, icon, href, type }) => (
        <li key={title} className="list-inline-item">
          <a
            title={title}
            href={href}
            target={title == "Email" ? undefined : "_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={
                type === "regular" ? ["fas", `${icon}`] : ["fab", `${icon}`]
              }
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialLinks;
