import githubLogo from '../assets/github.svg.png'
import './style/Project.css'
import parkBrew from '../assets/park-brew.png'
import critterTracker from '../assets/critter-tracker.png'

export default function Project() {
    const projects = [
        {
            name: "Park Brew",
            githubLink: "https://github.com/nolannaphys/park-brew",
            websiteLink: "https://nolannaphys.github.io/park-brew/",
            description: "When the user inputs a city and state into our search bars a list of 5 National Parks and 5 Breweries will populate. The user can click on the different names provided to visit the website for the parks and breweries. If the user is not satisfied with the results they can continue to hit the search bar to see other results in the given location. If the user chooses to click the save icon they can store the results in client-side storage if they want to visit those locations in the future.",
            image: parkBrew
        },
        {
            name: "Critter Tracker",
            githubLink: "https://github.com/nolannaphys/critter-tracker",
            websiteLink: "https://critter-tracker-p2-d4b8f730eb59.herokuapp.com/",
            description: "Critter Tracker is a platform that enables users to create profiles and share information about animals through pictures and descriptions. It utilizes a database to store and retrieve user data, including profiles and uploaded animal content.",
            image: critterTracker
        },
        // {
        //     name: "",
        //     githubLink: "",
        //     websiteLink: "",
        //     description: "",
        //     image: 
        // },
        // {
        //     name: "",
        //     githubLink: "",
        //     websiteLink: "",
        //     description: "",
        //     image: 
        // },
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