import githubLogo from '../assets/github.svg.png'
import './style/Project.css'

export default function Project() {
    const projects = [
        {
            name: "",
            githubLink: "",
            websiteLink: "",
            description: "",
            image: ""
        },
        {
            name: "",
            githubLink: "",
            websiteLink: "",
            description: "",
            image: ""
        },
        {
            name: "",
            githubLink: "",
            websiteLink: "",
            description: "",
            image: ""
        },
        {
            name: "",
            githubLink: "",
            websiteLink: "",
            description: "",
            image: ""
        },
    ]
    
return(
    <section>
        <h3 className="project-name">My Projects</h3>
        <ul className="projects">
            {
                projects.map((project, i) => (
                    <li key = {i}>
                    <div className="project-section">
                        <img src={project.image} className="image" alt="each picture image"></img>
                        <div className="project-info">
                            <div className="project-title">
                                <a href={project.websiteLink} style={{color: "38220f"}}>{project.name}</a>
                        </div>
                        <a href={project.githubLink}><img src={githubLogo} className="github-image" alt="github logo"></img></a>
                        <p>{project.description}</p>
                        </div>
                    </div>
                    </li>
                ))
            }
        </ul>
    </section>
)
};