import githubLogo from '../assets/github.svg.png'
import './style/Project.css'
import parkBrew from '../assets/park-brew.png'
import critterTracker from '../assets/critter-tracker.png'
import movieVault from '../assets/movie-vault.png'

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
        {
            name: "Movie Vault",
            githubLink: "https://github.com/nolannaphys/movie-vault",
            websiteLink: "https://movie-vault-a6d86baeac1b.herokuapp.com/",
            description: "Movie Vault is a react application that uses the OMDb to allow users to search for movies so that they can view a quick plot summary and it's director. The application also allows for users to add movies to a watchlist for later reference. User lists are tied to their login, so they are able to view their lists from any device.",
            image: movieVault
        },
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
        <h3>My Projects</h3>
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
                        <p>{project.description}</p>
                        <a href={project.githubLink}><img src={githubLogo} className="github-image" alt="github logo"></img></a>
                        </div>
                    </div>
                    </li>
                ))
            }
        </ul>
    </section>
)
};