import "./buttonGit.css";

const ButtonGit = () => {
    return (
      <a
        href="https://github.com/MattyK03"
        target="_blank"
        rel="noreferrer"
        className="project__github-link"
      >
        <i className="fa-brands fa-github project__button"></i>
        GitHub repo
      </a>
    );
}
 
export default ButtonGit;