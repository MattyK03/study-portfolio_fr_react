import "../styles/skills.css"

const Skills = () => {
    return (  
        <section className="skills">
            <div className="container">
                <div className="skills__content">
                    <h1 className="projects__title">Skills</h1>
                    <h2 className="skills__name">Frontend</h2>
                    <div className="skills__text">
                        JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
                    </div>
                    <h2 className="skills__name">Backend</h2>
                    <div className="skills__text">
                        NodeJS, MySQL, MongoDB, PHP, Laravel
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Skills;